const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

//render all posts
router.get("/", (req, res) => {
  Post.findAll({
    attributes: [
      "id",
      "content",
      "title",
      "created_at",
      [
        sequelize.literal(
          `(SELECT AVG(num_rating) FROM rating WHERE post.id = rating.post_id)`
        ),
        "rating_score",
      ],
    ],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        }
      },
      {
        model: User,
        attributes: ["username"]
      }
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => res.status(500).json(err));
});

//render login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

//render single post
router.get("/posts/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "content",
      "title",
      "created_at",
      [
        sequelize.literal(
          `(SELECT AVG(num_rating) FROM rating WHERE post.id = rating.post_id)`
        ),
        "rating_score",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: [
          "id",
          "comment_text",
          "post_id",
          "user_id",
          "created_at",
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ]
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render("product", {
        post,
        loggedIn: req.session.loggedIn,
      });
    })

    .catch((err) => res.status(500).json(err));
});


module.exports = router;
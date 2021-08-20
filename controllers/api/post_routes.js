const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Rating, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//get all posts
router.get("/", (req, res) => {
  Post.findAll({
    //Query configuration
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
      //inclue the Comment model here
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get single post
router.get("/:id", (req, res) => {
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
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//PUT /api/posts/rating
router.put("/:id/rating", withAuth, (req, res) => {
  Rating.create({
    user_id: req.session.user_id,
    post_id: req.params.id,
    num_rating: req.body.num_rating
  })
    .then(() => {
      return Post.findOne({
        where: {
          id: req.params.id
        },
        attributes: [
          "id",
          "title",
          "content",
          [
            sequelize.literal(
              `(SELECT AVG(num_rating) FROM rating WHERE post.id = rating.post_id)`
            ),
            "rating_score"
          ],
        ]
      })
    })
    .then(updatedPostData => res.json(updatedPostData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });

})

router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      content: req.body.content

    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

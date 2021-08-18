const router = require("express").Router();
const { Comment, Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Comment.findAll({
    attributes: ["id", "comment_text"],
    include: [
      {
        model: Post,
        attributes: ["title", "content"],
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  //check the session
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      //use the id from the session
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    })
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.delete("/:id", withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(400).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

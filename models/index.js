const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const Rating = require("./Rating");

//create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

User.belongsToMany(Post, {
  through: Rating,
  foreignKey: "user_id",
});

Post.belongsToMany(User, {
  through: Rating,
  foreignKey: "post_id",
});

Rating.belongsTo(User, {
  foreignKey: "user_id",
});

Rating.belongsTo(Post, {
  foreignKey: "post_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Comment, Rating };

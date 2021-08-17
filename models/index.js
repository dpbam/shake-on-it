const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Rating = require('./Rating');
const State = require('./State');
const City = require('./City');

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


State.hasMany(Post, {
  foreignKey: 'state_id',

})

Post.belongsTo(State, {
  foreignKey: 'state_id',
});

City.hasMany(Post, {
  foreignKey: 'city_id',

})

Post.belongsTo(City, {
  foreignKey: 'city_id',

});



module.exports = { User, Post, Comment, Rating, State, City };


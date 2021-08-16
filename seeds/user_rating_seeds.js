const sequelize = require("../config/connection");
const { Rating } = require("../models");

const ratingdata = [
  {
    num_rating: 5,
    user_id: 1,
    post_id: 1,
  },
  {
    num_rating: 4,
    user_id: 2,
    post_id: 5,
  },
  {
    num_rating: 3,
    user_id: 3,
    post_id: 2,
  },
  {
    num_rating: 2,
    user_id: 4,
    post_id: 4,
  },
  {
    num_rating: 1,
    user_id: 5,
    post_id: 3,
  },
  {
    num_rating: 5,
    user_id: 6,
    post_id: 6,
  },
  {
    num_rating: 4,
    user_id: 7,
    post_id: 10,
  },
  {
    num_rating: 3,
    user_id: 8,
    post_id: 7,
  },
  {
    num_rating: 2,
    user_id: 9,
    post_id: 8,
  },
  {
    num_rating: 1,
    user_id: 10,
    post_id: 11,
  },
];

const seedRating = () => Rating.bulkCreate(ratingdata);
module.exports = seedRating;

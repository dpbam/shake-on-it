const seedUsers = require("./user_seeds");
const seedPosts = require("./post_seeds");
const seedComments = require("./comment_seeds");
const seedRating = require("./user_rating_seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");

  await seedUsers();
  console.log("--------------");

  await seedPosts();
  console.log("--------------");

  await seedComments();
  console.log("--------------");

  await seedRating();
  console.log("--------------");

  process.exit(0);
};

seedAll();

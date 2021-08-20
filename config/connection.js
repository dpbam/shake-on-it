const Sequelize = require("sequelize");
require("dotenv").config();
var mysql = require("mysql2");

let sequelize;

console.log(process.env.JAWSDB_URL);
console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW);

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;

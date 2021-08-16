const sequelize = require("../config/connection");
const { City } = require("../models");

const citydata = [
  {
    city: "Montgomery",
  },
  {
    city: "Birmingham",
  },
  {
    city: "Huntsville",
  },
  {
    city: "Juneau",
  },
  {
    city: "Anchorage",
  },
  {
    city: "Fairbanks",
  },
  {
    city: "Phoenix",
  },
  {
    city: "Scottsdale",
  },
  {
    city: "Tempe",
  },
  {
    city: "Little Rock",
  },
  {
    city: "Hot Springs",
  },
  {
    city: "Fayetteville",
  },
  {
    city: "Sacremento",
  },
  {
    city: "Los Angeles",
  },
  {
    city: "San Francisco",
  },
  {
    city: "Denver",
  },
  {
    city: "Fort Collins",
  },
  {
    city: "Boulder",
  },
  {
    city: "Hartford",
  },
  {
    city: "Bridgeport",
  },
  {
    city: "New Haven",
  },
  {
    city: "Dover",
  },
  {
    city: "Wilmington",
  },
  {
    city: "Newark",
  },
  {
    city: "Tallahassee",
  },
  {
    city: "Jacksonville",
  },
  {
    city: "Miami",
  },
  {
    city: "Atlanta",
  },
  {
    city: "Savannah",
  },
  {
    city: "Augusta",
  },
  {
    city: "Honolulu",
  },
  {
    city: "Hilo",
  },
  {
    city: "Pearl City",
  },
  {
    city: "Boise",
  },
  {
    city: "Twin Falls",
  },
  {
    city: "Idaho Falls",
  },
  {
    city: "Springfield",
  },
  {
    city: "Chicago",
  },
  {
    city: "Aurora",
  },
  {
    city: "Indianapolis",
  },
  {
    city: "Fort Wayne",
  },
  {
    city: "Evansville",
  },
  {
    city: "Des Moines",
  },
  {
    city: "Cedar Rapids",
  },
  {
    city: "Davenport",
  },
  {
    city: "Topeka",
  },
  {
    city: "Wichita",
  },
  {
    city: "Overland Park",
  },
  {
    city: "Frankfort",
  },
  {
    city: "Louisville",
  },
  {
    city: "Bowling Green",
  },
  {
    city: "Baton Rouge",
  },
  {
    city: "New Orleans",
  },
  {
    city: "Shreveport",
  },
  {
    city: "Augusta",
  },
  {
    city: "Portland",
  },
  {
    city: "Bangor",
  },
  {
    city: "Annapolis",
  },
  {
    city: "Baltimore",
  },
  {
    city: "Columbia",
  },
  {
    city: "Boston",
  },
  {
    city: "Worcester",
  },
  {
    city: "Springfield",
  },
  {
    city: "Lansing",
  },
  {
    city: "Detroit",
  },
  {
    city: "Ann Arbor",
  },
  {
    city: "St. Paul",
  },
  {
    city: "Minneapolis",
  },
  {
    city: "Rochester",
  },
  {
    city: "Jackson",
  },
  {
    city: "Gulfport",
  },
  {
    city: "Southaven",
  },
  {
    city: "Jefferson City",
  },
  {
    city: "Kansas City",
  },
  {
    city: "St. Louis",
  },
  {
    city: "Helena",
  },
  {
    city: "Billings",
  },
  {
    city: "Missoula",
  },
  {
    city: "Lincoln",
  },
  {
    city: "Omaha",
  },
  {
    city: "Bellevue",
  },
  {
    city: "Carson City",
  },
  {
    city: "Las Vegas",
  },
  {
    city: "Henderson",
  },
  {
    city: "Concord",
  },
  {
    city: "Manchester",
  },
  {
    city: "Nashua",
  },
  {
    city: "Newark",
  },
  {
    city: "Jersey City",
  },
  {
    city: "Paterson",
  },
  {
    city: "Santa Fe",
  },
  {
    city: "Albuquerque",
  },
  {
    city: "Las Cruces",
  },
  {
    city: "Albany",
  },
  {
    city: "New York City",
  },
  {
    city: "Rochester",
  },
  {
    city: "Raleigh",
  },
  {
    city: "Charlotte",
  },
  {
    city: "Greensboro",
  },
  {
    city: "Bismarck",
  },
  {
    city: "Fargo",
  },
  {
    city: "Grand Forks",
  },
  {
    city: "Columbus",
  },
  {
    city: "Cincinnati",
  },
  {
    city: "Cleveland",
  },
  {
    city: "Oklahoma City",
  },
  {
    city: "Tulsa",
  },
  {
    city: "Norman",
  },
  {
    city: "Salem",
  },
  {
    city: "Portland",
  },
  {
    city: "Eugene",
  },
  {
    city: "Harrisburg",
  },
  {
    city: "Philadelphia",
  },
  {
    city: "Pittsburgh",
  },
  {
    city: "Providence",
  },
  {
    city: "Cranston",
  },
  {
    city: "Warwick",
  },
  {
    city: "Columbia",
  },
  {
    city: "Charleston",
  },
  {
    city: "North Charleston",
  },
  {
    city: "Pierre",
  },
  {
    city: "Sioux Falls",
  },
  {
    city: "Rapid City",
  },
  {
    city: "Nashville",
  },
  {
    city: "Memphis",
  },
  {
    city: "Knoxville",
  },
  {
    city: "Austin",
  },
  {
    city: "Dallas",
  },
  {
    city: "Houston",
  },
  {
    city: "Salt Lake City",
  },
  {
    city: "West Valley City",
  },
  {
    city: "West Jordan",
  },
  {
    city: "Montpelier",
  },
  {
    city: "Burlington",
  },
  {
    city: "Essex",
  },
  {
    city: "Richmond",
  },
  {
    city: "Virginia Beach",
  },
  {
    city: "Norfolk",
  },
  {
    city: "Olympia",
  },
  {
    city: "Seattle",
  },
  {
    city: "Spokane",
  },
  {
    city: "Charleston",
  },
  {
    city: "Morgantown",
  },
  {
    city: "Huntington",
  },
  {
    city: "Madison",
  },
  {
    city: "Milwaukee",
  },
  {
    city: "Green Bay",
  },
  {
    city: "Cheyenne",
  },
  {
    city: "Laramie",
  },
  {
    city: "Casper",
  },
];

const seedCities = () => City.bulkCreate(citydata);
module.exports = seedCities;

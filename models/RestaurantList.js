const Sequelize = require('sequelize');
const db = new Sequelize('opentable', 'root', 'hackreactor', {
    host: 'localhost', //might not always be local host
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });

const RestaurantList = db.define('restaurant', {
  restaurant: Sequelize.STRING,
});

module.exports.RestaurantList = RestaurantList;

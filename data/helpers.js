// const dates = require('../database/datedata.js')
// const timesAndTableData = require('../database/timesAndTableData.js')
// const restaurantListData = require('../database/data.js')

const Sequelize = require('sequelize');
const db = new Sequelize('ottest', 'root', 'hackreactor',
{
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

//one restaurant list can have many restaurants


exports.Restaurant
exports.RestaurantList

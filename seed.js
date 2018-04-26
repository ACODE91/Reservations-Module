const calendarDatesData = require('./data/datedata.js');
const seedData = require('./data/dataForSeed');
const tf2Data = require('./data/2personData.js');
const Sequelize = require('sequelize');

const db = new Sequelize('opentable', 'root', 'hackreactor', {
  host: 'localhost', 
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const seedArr = seedData.seedData;

const Reservation = db.define('reservation', {
  time: Sequelize.STRING,
  date: Sequelize.STRING,
  tablesLeft: Sequelize.INTEGER,
});

const RestaurantList = db.define('restaurant', {
  restaurant: Sequelize.STRING,
});

RestaurantList.sync({ force: true }).then(() => RestaurantList.bulkCreate([{ restaurant: 'fakeRestaurant' }]).then(() => {
  Reservation.belongsTo(RestaurantList);
  Reservation.sync({ force: true }).then(() => Reservation.bulkCreate(seedArr));
}));


const restaurantNameData = require('./data/restaurantNameData.js');
const calendarDatesData = require('./data/datedata.js');
const timesData = require('./data/timesdata.js');
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

const restaurantNameArray = restaurantNameData.restaurantName;

const timesArr = timesData.seedData;

const Reservation = db.define('reservation', {
  time: Sequelize.STRING,
  date: Sequelize.STRING,
  tablesLeft: Sequelize.INTEGER,
});

const RestaurantList = db.define('restaurant', {
  restaurant: Sequelize.STRING,
});

const newLocal = RestaurantList.sync({ force: true }).then(() => RestaurantList.bulkCreate(restaurantNameArray).then(() => {
  Reservation.belongsTo(RestaurantList);
  Reservation.sync({ force: true }).then(() => {
    return Reservation.bulkCreate(timesArr(200));
  });
}));

const query = function (people, date, time, restaurant, callback) {
  return RestaurantList.findOne({ where: { restaurant } }).then((item) => {
    Reservation.findOne({ where: { restaurantId: item.dataValues.id } }).then((info) => {
      callback(info.dataValues);
    });
  });
};

module.exports.query = query;

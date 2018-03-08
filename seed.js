const restaurantNameData = require('./data/restaurantNameData.js');
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

const restaurantNameArray = restaurantNameData.restaurantName;

const seedArr = seedData.seedData;

const Reservation = db.define('reservation', {
  time: Sequelize.STRING,
  date: Sequelize.STRING,
  tablesLeft: Sequelize.INTEGER,
});

const RestaurantList = db.define('restaurant', {
  restaurant: Sequelize.STRING,
});

const syncData = function (array) {
  return RestaurantList.sync({ force: true }).then(() => RestaurantList.bulkCreate(restaurantNameArray).then(() => {
    Reservation.belongsTo(RestaurantList);
    Reservation.sync({ force: true }).then(() => Reservation.bulkCreate(array));
  }));
};

const query = function (date, callback) {
  // console.log('from query',date)
  // return Reservation.findOne({ where: { date: item.dataValues.date } }).then((info) => {
  //   callback(info.dataValues);
  // });

  // return RestaurantList.findOne({ where: { id: 1 } }).then((item) => {
  //   console.log('item -->', item)
  //   Reservation.findAll({ where: { restaurantId: item.dataValues.id } }).then((info) => {
  //     for(let i = 0; i < info.length; i++){
  //       console.log(info[i].dataValues);
  //     }
  //     callback(info.dataValues);
  //   });
  // });

  return Reservation.findAll({ where: { date, restaurantId: 2 } }).then((found) => {
    // callback(found);
    console.log('date queried was ', date);
    console.log(found);
  });
};

module.exports.query = query;
module.exports.syncData = syncData;

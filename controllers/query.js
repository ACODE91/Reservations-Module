const Sequelize = require('sequelize');
const reservationModel = require('../models/Reservation.js');

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

const query = function (date, callback) {
  return reservationModel.Reservation.findAll({ where: { date, restaurantId: 1 } }).then((found) => {
    const tablesAvailableArr = [];
    for (let i = 0; i < found.length; i++) {
      if (found[i].dataValues.tablesLeft > 0) {
        tablesAvailableArr.push(found[i].dataValues.time);
      }
    }

    callback(tablesAvailableArr);
  });
};

module.exports.query = query;

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

const Reservation = db.define('reservation', {
  time: Sequelize.STRING,
  date: Sequelize.STRING,
  tablesLeft: Sequelize.INTEGER,
});

module.exports.Reservation = Reservation;

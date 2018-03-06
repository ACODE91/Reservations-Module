const restaurantNameData = require('./data/restaurantNameData.js');
const calendarDatesData = require('./data/datedata.js');
const timesData = require('./data/timesdata.js');
const tf2Data = require('./data/2personData.js');
const Sequelize = require('sequelize');
const db = new Sequelize('ottest', 'root', 'hackreactor', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

var restaurantNameArray = restaurantNameData.restaurantName;

var timesArr = timesData.seedData;

const Reservation = db.define('reservation', {
  time: Sequelize.STRING,
  date: Sequelize.STRING,
  tablesLeft: Sequelize.INTEGER
});
  
const Restaurants = db.define('restaurant', {
  restaurant: Sequelize.STRING
  });

  var restaurantModels = [];
  


  Restaurants.sync({force:true}).then(() => {
  Restaurants.bulkCreate(restaurantNameArray).then(() => {
      //push all models into restaurantModels
        for(let i = 0; i < restaurantNameArray.length; i++) {
            restaurantModels.push(db.define(restaurantNameArray[i].restaurant + ' dates', {
                date: Sequelize.STRING
            }));
        }
        //sync them
        for(let i = 0; i < restaurantModels.length; i++) {
            restaurantModels[i].belongsTo(Restaurants);
            restaurantModels[i].sync().then(() => {
                restaurantModels[i].bulkCreate(timesData.datesArray);
            });
        //insert corresponding ID into the restaurantid field.
        var IDs = [];
            restaurantModels[i].
        }

    });
  });

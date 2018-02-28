const dates = require('../database/datedata.js')
const timesAndTableData = require('../database/timesAndTableData.js')
const restaurantListData = require('../database/data.js')

const Sequelize = require('sequelize');
const sequelize = new Sequelize('ottest', 'root', 'hackreactor', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});


const Restaurant = sequelize.define('restaurant', {
  date: Sequelize.STRING
});

  const RestaurantList = sequelize.define('restaurantList', {
    restaurant: {
      type: Sequelize.STRING,
      primaryKey: true
    }
  });

  const DateList = sequelize.define('date', {
    times: Sequelize.STRING,
    tableFor2: Sequelize.INTEGER,
    tableFor4: Sequelize.INTEGER
  });

  Restaurant.belongsTo(RestaurantList);
  // DateList.belongsTo(Restaurant);
  

  // force: true will drop the table if it already exists
var createRestaurantListModel = function() {

    var date = dates.datesArray;
  
    for(let i = 0; i < date.length; i++){
  
    Restaurant.sync({force: false}).then(() => {
      // Table created
      return Restaurant.create({
        date: date[i]
      });
    });
  }
  

  var restaurantData = restaurantListData.restaurantName;

  for(let i = 0; i < restaurantData.length; i++){

  RestaurantList.sync({force: false}).then(() => {
    // Table created
    return RestaurantList.create({
      name: restaurantData[i],
      restaurant: Restaurant
    });
  });
}
}


// var createDateListModel = function(times, tableFor2, tableFor4) {
//   var dateListArray = [];
//   var dateListObj = {};

// //   var decorateObject = function(object, time, tf2, tf4) {
// //     object.times = time;
// //     object.tableFor2 = tf2;
// //     object.tableFor4 = tf4;
// //   }


//   // DateList.sync({force: false}).then(() => {
//   //   // Table created
//   //   return DateList.create({
//   //     times: null
//   //   });
//   // });

// }

var fetchItem = (callback) => {
    RestaurantModel.findAll().then(restaurant => {
        console.log(restaurant)
        callback(restaurant)
      });
    }



module.exports.createRestaurantListModel = createRestaurantListModel;
// module.exports.createRestaurantModel = createRestaurantModel;
module.exports.fetchItem = fetchItem;

'use strict';
module.exports = (sequelize, DataTypes) => {
  var RestaurantsList = sequelize.define('RestaurantsList', {
    restaurant: DataTypes.
  }, {});
  RestaurantsList.associate = function(models) {
    // associations can be defined here
  };
  return RestaurantsList;
};
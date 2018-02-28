'use strict';
var randomRestaurantNames = require('./data.js')

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     /*
//       Add altering commands here.
//       Return a promise to correctly handle asynchronicity.

//       Example:
//       return queryInterface.bulkInsert('Person', [{
//         name: 'John Doe',
//         isBetaMember: false
//       }], {});
//     */

    
// var randomWords = "elated ajar frame farfetched flesh roof alleged yummy rare unwritten agree smash beginner melt glamorous enchanted appliance walk receipt massive pumped cooperative radiate mean dress rhythm ground misty pull lazy juice care different religion shop gate deer nerve car introduce money ladybug silent rebel wary handle wish glassstop glove mark";
// randomWords = randomWords.split(' ');

// var restaurantNames = [];

// var randomizeNames = function(array, max) {
// while(restaurantNames.length < 200){
// for(let i = 0; i < array.length; i++) {
//     restaurantNames.push(array[Math.floor(Math.random() * Math.floor(max))] + ' ' + 
//     array[Math.floor(Math.random() * Math.floor(max))]);
// }
// }
// }

// randomizeNames(randomWords, randomWords.length);

//     for(let i = 0; i < restaurantNames.length; i++){
//     queryInterface.bulkInsert('RestaurantsLists', [{
//           restaurant : restaurantNames[i],
//           createdAt : new Date(),
//           updatedAt : new Date()
//         }], {});
//       }
      
//   },

//   down: (queryInterface, Sequelize) => {
//     /*
//       Add reverting commands here.
//       Return a promise to correctly handle asynchronicity.

//       Example:
//       return queryInterface.bulkDelete('Person', null, {});
//     */
//     queryInterface.bulkDelete('RestaurantsLists', [{
//       restaurant :'test'
//     }])
//   }
// };

module.exports = {
  up : function (queryInterface, Sequelize) {
    console.log(randomRestaurantNames.restaurantNames)
    return queryInterface.bulkInsert('RestaurantsLists',randomRestaurantNames.restaurantNames, {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('RestaurantsLists', [{
      restaurant :'John'
    }])
  }
};
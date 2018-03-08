const syncFn = require('../seed.js');

const tableFor2Data = [];

const populateTableFor2Data = function () {
  while (tableFor2Data.length < 200) {
    tableFor2Data.push(Math.floor(Math.random() * Math.floor(3)));
  }
};

populateTableFor2Data();

const datesArray = ['2/26/2018', '2/27/2018', '2/28/2018'];

const populateDatesArray = function () {
  for (let i = 1; i < 31; i++) {
    datesArray.push(`3/${i.toString()}/2018`);
  }
};

populateDatesArray();

const timesArray = ['12:00 AM', '12:30 AM'];

const populateTimesData = function () {
  for (let i = 1; i < 12; i++) {
    timesArray.push(`${i.toString()}:00 AM`);
    timesArray.push(`${i.toString()}:30 AM`);
  }

  timesArray.push('12:00 PM', '12:30 PM');

  for (let i = 1; i < 12; i++) {
    timesArray.push(`${i.toString()}:00 PM`);
    timesArray.push(`${i.toString()}:30 PM`);
  }
};

populateTimesData();

const getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

var recordsArray = [];

const seedData = function () {

  for (let dateIndexCount = 0; dateIndexCount < datesArray.length; dateIndexCount++) {
    for (let i = 0; i < timesArray.length; i++) {
      let obj = {};
      obj.time = timesArray[i];
      obj.date = datesArray[dateIndexCount];
      obj.tablesLeft = getRandomInt(2);
      obj.restaurantId = 1;
      recordsArray.push(obj);
    }
  }
};

seedData();
 
module.exports.seedData = recordsArray;
module.exports.timesArray = timesArray;
module.exports.datesArray = datesArray;

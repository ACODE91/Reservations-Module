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

const seedData = function (total) {
  const recordsArray = [];
  let counter = 0;

  while (counter < total) {
    const obj = {};
    obj.time = timesArray[getRandomInt(timesArray.length)];
    obj.date = datesArray[getRandomInt(datesArray.length)];
    obj.tablesLeft = getRandomInt(3);
    obj.restaurantId = getRandomInt(200);
    recordsArray.push(obj);
    counter++;
  }
  return recordsArray;
};

module.exports.seedData = seedData;
module.exports.timesArray = timesArray;
module.exports.datesArray = datesArray;

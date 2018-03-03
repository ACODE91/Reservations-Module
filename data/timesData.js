var tableFor2Data = [];

var populateTableFor2Data = function() {
while(tableFor2Data.length < 200) {
    tableFor2Data.push(Math.floor(Math.random() * Math.floor(3)));
}
}

populateTableFor2Data()

let startDate = '2/26/2018';
var datesArray = ['2/26/2018', '2/27/2018', '2/28/2018'];

var populateDatesArray = function() {
for(let i = 1; i < 31; i++){
    datesArray.push('3/' + i.toString() + '/2018');
}
}

populateDatesArray();

var timesArray = ['12:00 AM', '12:30 AM'];

var populateTimesData = function() {
    for(let i = 1; i < 12; i++) {
        timesArray.push(i.toString() + ':00 AM');
        timesArray.push(i.toString() + ':30 AM');
    }

    timesArray.push('12:00 PM', '12:30 PM');

    for(let i = 1; i < 12; i++){
        timesArray.push(i.toString() + ':00 PM');
        timesArray.push(i.toString() + ':30 PM');
    }
}

populateTimesData();

var getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

var seedData = function(total){
    var recordsArray = [];
    var counter = 0;  

    while(counter < total) {
        var obj = {};
        obj.time = timesArray[getRandomInt(timesArray.length)] 
        obj.date = datesArray[getRandomInt(datesArray.length)]
        obj.table = getRandomInt(3)
        obj.restaurantListId = getRandomInt(201)
        recordsArray.push(obj);
        counter++;
}

    return recordsArray;
}

module.exports.seedData = seedData;
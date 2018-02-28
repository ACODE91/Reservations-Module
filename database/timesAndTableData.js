var timesData = ['12:00 AM', '12:30 AM'];
var tableFor2Data = [];
var tableFor4Data = [];
var modelObjectsArr = [];

var populateTimesData = function() {
    for(let i = 1; i < 12; i++) {
        timesData.push(i.toString() + ':00 AM');
        timesData.push(i.toString() + ':30 AM');
    }

    timesData.push('12:00 PM', '12:30 PM');

    for(let i = 1; i < 12; i++){
        timesData.push(i.toString() + ':00 PM');
        timesData.push(i.toString() + ':30 PM');
    }
}

populateTimesData();

var populateTableFor2Data = function() {
while(tableFor2Data.length < 200) {
    tableFor2Data.push(Math.floor(Math.random() * Math.floor(3)));
    tableFor4Data.push(Math.floor(Math.random() * Math.floor(5)));
}
}

populateTableFor2Data()

// var outterFn = function(){
//     var modelObject = {};

// while(modelObjectsArr.length < 200) {
//     modelObjectsArr.push(modelObject);
// }

// for(let i = 0; i < modelObjectsArr.length; i++) {
//     for(let w = 0; w < timesData.length; w++) {
//         modelObjectsArr[i]["times"] = timesData[w];
//     }
// }

// };
module.exports.timesData = timesData;
module.exports.tableFor2Data = tableFor2Data;
module.exports.tableFor4Data = tableFor4Data;
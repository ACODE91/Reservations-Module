let startDate = '2/26/2018';
var datesArray = ['2/26/2018', '2/27/2018', '2/28/2018'];

var populateDatesArray = function() {
for(let i = 1; i < 31; i++){
    datesArray.push('3/' + i.toString() + '/2018');
}
}

populateDatesArray()

module.exports.datesArray = datesArray;
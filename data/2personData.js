const tableFor2Data = [];

const populateTableFor2Data = function () {
  while (tableFor2Data.length < 200) {
    tableFor2Data.push(Math.floor(Math.random() * Math.floor(3)));
  }
};

populateTableFor2Data();


module.exports.tableFor2Data = tableFor2Data;

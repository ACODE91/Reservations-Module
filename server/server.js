const express = require('express');
const path = require('path');
const app = express();
const dbController = require('../controllers/query.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/public')));

app.use((req, res, next) => {
  if (req.method === 'POST') {
    dbController.query(req.body.date, (times) => {
      res.send(times);
    });
  }
});

app.listen(6500, () => {
  console.log('listening on port 6500');
});

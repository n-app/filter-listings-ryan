const express = require('express');
const db = require('../database/index.js');
const path = require('path');

const app = express();
const port = 3004;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(3004, () => {
  console.log(`listening on port ${port}`);
});

app.get('/getRooms', (req, res) => {
  db.getAllRoomlistRecords(res.send.bind(res));
});

app.get('/getImages/', (req, res) => {
  db.getAllImagesRecords(res.send.bind(res));
});

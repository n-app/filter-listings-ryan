const express = require('express');
const db = require('../database/index.js');
const path = require('path');

const app = express();
const port = 3004;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(3004, () => {
  console.log(`listening on port ${port}`);
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Mehods',
      'GET, POST, PUT, PATCH, DELETE',
    );
    return res.status(200).json({});
  }
  next();
});

app.get('/filterListings/getRooms', (req, res) => {
  db.getAllRoomlistRecords(res.send.bind(res));
});

app.get('/filterListings/getImages', (req, res) => {
  db.getAllImagesRecords(res.send.bind(res));
});

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'rooms',
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to the database-->', err);
    return;
  }
  console.log('Connection to database established');
});

const insertRoomlistRecords = (data) => {
  connection.query('INSERT INTO roomlist (roomname, price, numberOfBedrooms, rating, numberOfReviews, roomType, instantBook) VALUES ?', [data]);
};

const insertImagesRecords = (data) => {
  connection.query('INSERT INTO images (urlToImage, roomId) VALUES ?', [data]);
};

const getAllRoomlistRecords = (sendCallback) => {
  connection.query('SELECT * FROM roomlist', (err, result) => {
    if (err) console.log(err);
    sendCallback(result);
  });
};

const getAllImagesRecords = (sendCallback) => {
  connection.query('SELECT * FROM images', (err, result) => {
    if (err) console.log(err);
    sendCallback(result);
  });
};

module.exports = {
  connection,
  insertRoomlistRecords,
  insertImagesRecords,
  getAllRoomlistRecords,
  getAllImagesRecords,
};

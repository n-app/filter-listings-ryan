const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.host || 'localhost',
  port: process.env.databasePort || '',
  user: process.env.user || 'root', //'root'
  password: process.env.password,
  database: process.env.database || 'mysql_n_app_filter_listings', //'rooms'
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

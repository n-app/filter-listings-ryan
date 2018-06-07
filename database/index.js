const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'rooms'
})

connection.connect((err) => {
  if(err) {
    console.log('Error connecting to the database-->', err)
    return;
  }
  console.log('Connection to database established')
})

const insertRecords = (data) => {
  connection.query(
    'INSERT INTO roomlist (roomname, price, numberOfBedrooms, rating, numberOfReviews, urlToImage) VALUES ?', [data]
  );
}

const getAllRecords = (sendCallback) => {
  connection.query('SELECT * FROM roomlist', (err, result, fields) => {
    if (err) console.log(err);
    sendCallback(result);
  });
}

module.exports = {
  connection,
  insertRecords,
  getAllRecords
}

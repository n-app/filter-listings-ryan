const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'rooms'
});

connection.connect((err) => {
  if(err) {
    console.log('Error connecting to the database-->', err)
    return;
  }
  console.log('Connection to database established')
})

const insertRecords = (sql, data) => {
  connection.query(sql, [data]);
}

module.exports = {
  connection,
  insertRecords
}

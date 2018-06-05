var express = require('express');
var app = express();

let port = 3004;

app.use(express.static(__dirname + '/../client/dist'));

app.listen(3004, function() {
  console.log(`listening on port ${port}`)
})
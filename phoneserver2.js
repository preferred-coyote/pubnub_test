var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res, next){
  //res.send('Hello world');
  res.sendFile(path.join(__dirname + '/phone2.html'));
})

app.listen(9801);

var express = require('express');
var path = require('path');
var client = require('./client');
var app = express();

app.use(express.static(path.join(__dirname, '/')));



app.use('/', client);


module.exports = app;
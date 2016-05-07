var http = require('http');
var app=require('./app');
var server=http.createServer(app);
server.listen(80);


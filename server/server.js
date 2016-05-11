var express = require('express');
var morgan = require('morgan');
var logger = require('winston');
var path = require('path');
var db = require('../db/index.js');

require('dotenv').config({path: path.join(__dirname, '../.env')});

var app = express();
var port = process.env.PORT || 3000;
app.use(morgan('dev'));

app.set('port', port);

app.use(express.static(__dirname + '/../client'));

app.listen(port, function () {
	logger.info('Equip listening at ' + process.env.HOST + ':' + port);
});

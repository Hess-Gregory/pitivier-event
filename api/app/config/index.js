'use strict';

var express = require('express'),
    app = express();
var port = process.env.PORT || 3000;
var config = module.exports;
config.express = { port: port, ip: 'localhost' };
console.log('-----------> config : ', config.express);

var PRODUCTION = process.env.NODE_ENV === 'production';
var TEST = process.env.NODE_ENV === 'test';
var DEVELOPEMENT = process.env.NODE_ENV === 'development';


if (PRODUCTION) {
  config.express.ip = '127.0.0.1';
} else if (TEST) {
  config.express.ip = '127.0.0.1';
} else if (DEVELOPEMENT) {
  config.express.ip = '127.0.0.1';
}

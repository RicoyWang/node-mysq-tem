var mysql  = require('mysql');
var config = require('./DBConfig.js');

var onelib_pool = mysql.creatPool(config.onelib);
exports.onelib_pool = onelib_pool;
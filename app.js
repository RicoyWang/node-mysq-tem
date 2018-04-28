var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var proxy = require('express-http-proxy');

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var robot = require('./routes/robot');
var error = require('./routes/error');
// var post = require('./routes/post');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Cors 开放跨域
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('http://127.0.0.1:3000/', proxy('www.baidu.com'));
app.use('/', index);
app.use('/404', error);
app.use('/login', login);
app.use('/users', users);
app.use('/robot', robot);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found 404');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
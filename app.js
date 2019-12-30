require('dotenv').config();
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let bodyParser = require("body-parser");
let moment = require("moment");
let fileUpload = require('express-fileupload');
let hbs = require( 'express-handlebars');
let app = express();

let apiRouter = require('./routes/api');
let webRouter = require('./routes/web');

app.use(fileUpload());

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '20mb' }));
// Express 3.0
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb'}));

app.use(cookieParser());
//set moment format timezone
require('moment-timezone');
moment.tz.setDefault(process.env.TIME_ZONE);
// view engine setup
app.set('view engine', 'hbs');

app.engine( 'hbs', hbs( {
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir:  path.join(__dirname, '/resources/views/templates'),
  partialsDir:  path.join(__dirname, '/resources/views/templates')
}));
app.set('views', path.join(__dirname, 'resources/views'));

app.use(logger('dev'));
app.use('/public',express.static(path.join(__dirname, 'public')));
app.use('/storage',express.static(path.join(__dirname, 'storage')));





app.use('/api',apiRouter);
app.use('/', webRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use('/api',function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV === 'development' ? err : {};
  res.status(err.status).json({
    api_status: 0,
    api_message: err.status+" "+err.message,
    error_status : err.status
  });
});

app.use('/',function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV === 'development' ? err : {};
  data = {
    layout: 'default',
    title: err.status ,
    message : err.status+" "+err.message,
    error : err
  };
  res.render('error', data);
});

module.exports = app;

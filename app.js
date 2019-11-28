var createError = require('http-errors');
var express = require('express');
var path = require('path');
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/summergeeks');
let db =mongoose.connection;

// Check Connection

db.once('open', function(){
  console.log('Connected to MongoDB');
}); 

db.on('error', function(err){
  console.log(err);
});
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index_routes');
var hostRouter = require('./routes/host_routes');
var visitorRouter = require('./routes/visitor_routes');

var app = express();

// Bring in models

let Visitor = require('./models/visitors');
let Host = require('./models/hosts');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/hosts', hostRouter);
app.use('/visitors', visitorRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

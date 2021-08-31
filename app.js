var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var employeesRouter = require('./routes/employees');

var app = express();

// Create and populate shared employees list
// TODO make this a dict/map for quicker lookups when this gets large or use a database of some kind for persistence
// Found this technique to create app-wide variables here: https://stackoverflow.com/a/43279966/425683
// I'm not sure if this is good practice
app.locals.employees = [
{
  "id": "1",
  "fname": "Alfred",
  "lname": "Hong",
  "hdate": "2012-12-12",
  "role": "Manager"
},
{
  "id": "2",
  "fname": "Maria",
  "lname": "Fuentes",
  "hdate": "2005-09-10",
  "role": "CEO"
},
{
  "id": "3",
  "fname": "Tom",
  "lname": "Smith",
  "hdate": "2001-03-05",
  "role": "VP"
}
];

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/employees', employeesRouter);

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

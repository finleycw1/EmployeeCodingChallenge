var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var employeesRouter = require('./routes/employees');

var app = express();

// Create and populate shared employees list
// TODO make this a dict/map for quicker lookups when this gets large or use a database of some kind for persistence
// Found this technique to create app-wide variables here: https://stackoverflow.com/a/43279966/425683
// I'm not sure if this is good practice
app.locals.employees = [
    {
        "id": "1",
        "fname": "Gustavo",
        "lname": "Fring",
        "hdate": "2009-05-17",
        "role": "CEO"
    },
    {
        "id": "2",
        "fname": "Mike",
        "lname": "Ehrmantrout",
        "hdate": "2009-05-31",
        "role": "VP"
    },
    {
        "id": "3",
        "fname": "Walter",
        "lname": "White",
        "hdate": "2008-01-20",
        "role": "Manager"
    },
    {
        "id": "4",
        "fname": "Jesse",
        "lname": "Pinkman",
        "hdate": "2008-01-20",
        "role": "Lackey"
    }
];

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/employees', employeesRouter);

module.exports = app;

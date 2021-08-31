var express = require('express');
var router = express.Router();

// Populate employee list with names from example
var employees = [
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

/* GET employee listing. */
router.get('/', function(req, res, next) {
  res.send(employees);
});

/* GET specific employee. */
router.get(/^\/(\d+)$/, function(req, res, next) {
  let id = req.params[0];
  let employee = employees.find(employee => employee.id === id);
  if (undefined === employee) {
    res.sendStatus(404);
  }
  res.send(employee);
});

/* DELETE specific employee. */
router.delete(/^\/(\d+)$/, function(req, res, next) {
  let id = req.params[0];
  employees = employees.filter(employee => employee.id !== id);
});

module.exports = router;

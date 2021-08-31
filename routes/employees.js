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

function generateID() {
  let minId = 100000000
  let maxId = 999999999
  return Math.floor(Math.random() * (maxId - minId) + minId).toString(10);
}

/* Add a new employee. */
router.post('/', function(req, res, next) {
  let employee = req.body;
  // Generate a random ID (overwrite if already present)
  employee.id = generateID();
  // TODO validate input
  employees.push(employee);
  res.send(employee);
});

/* Add or replace an employee. */
router.put('/', function(req, res, next) {
  let employee = req.body;
  // TODO validate input
  // Remove existing employee, if applicable
  employees = employees.filter(e => e.id !== employee.id);
  employees.push(employee);
  res.send(employee);
});

/* Get an employee listing. */
router.get('/', function(req, res, next) {
  res.send(employees);
});

/* Get a specific employee. */
router.get(/^\/(\d+)$/, function(req, res, next) {
  let id = req.params[0];
  let employee = employees.find(employee => employee.id === id);
  if (undefined === employee) {
    res.sendStatus(404);
  }
  res.send(employee);
});

/* Delete specific employee. */
router.delete(/^\/(\d+)$/, function(req, res, next) {
  let id = req.params[0];
  employees = employees.filter(employee => employee.id !== id);
});

module.exports = router;

var express = require('express');
var router = express.Router();

const ROLES = ["CEO", "VP", "MANAGER", "LACKEY"];

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

/* Generates a random number to use as an employee ID and converts it to a String */
function generateID() {
  let minId = 100000000
  let maxId = 999999999
  return Math.floor(Math.random() * (maxId - minId) + minId).toString(10);
}

/* Validates that all of the fields in an employee object are sane */
function validateEmployee(employee) {
  return validateName(employee.fname) &&
      validateName(employee.lname) &&
      validateDate(employee.hdate) &&
      validateRole(employee.role)
}

/* Verify that the name is a string consisting of english letters only */
function validateName(name) {
  return (typeof name === "string") && /^[A-Za-z]+$/.test(name);
}

/* Verify that the date is a string in the form of YYYY-MM-DD */
function validateDate(date) {
  return (typeof date === "string") && /^\d\d\d\d\-\d\d\-\d\d$/.test(date);
}

/* Verify that the role matches one of the proscribed strings */
function validateRole(role){
  if (typeof  role !== "string"){
    return false;
  }
  let upperRole = role.toUpperCase();
  return ROLES.some(r => r === upperRole);
}

/* Add a new employee. */
router.post('/', function(req, res, next) {
  let employee = req.body;

  if (!validateEmployee(employee)) {
    res.status(400).send("Invalid employee record.")
    // TODO return a more specific error message
  }

  // Generate a random ID (overwrite if already present)
  employee.id = generateID();

  employees.push(employee);
  res.send(employee);
});

/* Add or replace an employee. */
router.put(/^\/(\d+)$/, function(req, res, next) {
  let id = req.params[0];
  // TODO Validate ID

  let employee = req.body;
  employee.id = id;
  if (!validateEmployee(employee)) {
    res.status(400).send("Invalid employee record.")
    // TODO return a more specific error message
  }

  // Remove existing employee, if applicable
  employees = employees.filter(e => e.id !== id);

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
  res.send();
});

module.exports = router;

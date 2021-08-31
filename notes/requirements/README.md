# Employee App Full Stack Coding Challenge

## Task

1. Create a node app that implements a set of REST APIs allowing CRUD functionality for an employee resource.
2. Update the provided **employee_table.html** file to support the following functionality:
    - Show a list of the existing employees
    - Include a way to create a new employee using the POST API

## Expected API Endpoints

1. `POST http://localhost:3000/api/employees`

Create a new record using a randomly generated value as the unique identifier (i.e. `_id` field). Validate that the
following fields are included in the `POST` body and have the right type/format as posted below:

- firstName (String)
- lastName (String)
- hireDate (YYYY-MM-DD format must be in the past)
- role (String) - must be one of the following (case-insensitive):
    - CEO
    - VP
    - MANAGER
    - LACKEY

2. `PUT http://localhost:3000/api/employees/:id`

   Replace the record corresponding to :id with the contents of the PUT body

3. `GET http://localhost:3000/api/employees/:id`

   Return the record corresponding to the id parameter

4. `GET http://localhost:3000/api/employees`

   Return all current records

5. `DELETE http://localhost:3000/api/employees/:id`

   Delete the record corresponding to the id parameter

### Additional Guidance

Persistent storage is not necessary, just use an in memory object to track employee records.

Use any npm modules you find useful.

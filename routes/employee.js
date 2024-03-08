// employee.js

const express = require('express');
const router = express.Router();
const {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    searchEmployee, // Corrected function name
    updateEmployee,
    deleteEmployee
} = require("../controllers/employee");

// create employee - POST request
router.post('/employees', createEmployee);

// read all employees - GET request
router.get('/employees', getAllEmployees);

// read one employee by id - GET request
router.get("/employees/:id", getEmployeeById);

// Search for an Employee - GET Request
router.get("/employees/search", searchEmployee); // Corrected function name

// Update an existing Employee - PUT request
router.put('/employees/:id', updateEmployee);

// Delete a specific Employee by ID - DELETE request
// Update the route to accept employee number instead of ID
router.delete('/employees/:employeeId', deleteEmployee);


module.exports = router;

const express = require('express');
const router = express.Router();
const {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    searchEmployees,
    updateEmployee,
    deleteEmployee
} = require("../controllers/employeeController");

// create employee - POST request
router.post( '/employees', createEmployees);

// read all employees - GET request
router.get('/employees', getAllEmployees);

// read one employee by id - GET request
router.get("/employees/:id", getEmployeeById);

// Search for an Employee - GET Request
router.get("/employees/search", searchEmployees);

// Update an existing Employee - PUT request
router.put('/employees/:id', updateEmployee);

// Delete a specific Employee by ID - DELETE request
router.delete('/employees/:id', deleteEmployee);

module.exports = router; 
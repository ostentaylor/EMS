const Employee = require('../models/employee');

//create a new employee

const createEmployee = async (req, res) => {
    try {
        // Generate a random employee number
        const employeeNumber = generateEmployeeNumber();

        // Create the new employee with the generated number
        const employee = new Employee({
            ...req.body,
            employeeNumber: employeeNumber // Assign the generated number
        });

        // Save the employee to the database
        await employee.save();

        // Send back the created employee
        res.status(201).json(employee);
    } catch (err) {
        res.status(400).json({ message: 'Creating an employee failed!' });
    }
}


// get all employees
const getAllEmployees = async (req,res)=>{
    console.log("Getting All Employees");
    try{
        const employees = await Employee.find();
        console.log('get all employee ', employees.length)
          return res.json(employees);    
    } catch(err){
        res.status(500).json({message: 'Failed to load employees'}); 
    }
};

//get an employee by its id
const getEmployeeById = async (req, res) => {
    res.json(req.employee);
};


// search employees
const searchEmployee = async (req, res) => {
  try {
    const searchTerm = req.query.q; // Corrected variable name
    const employees = await Employee.find({
      $or: [
        { firstName: { $regex: searchTerm, $options: "i" } },
        { lastName: { $regex: searchTerm, $options: "i" } },
        { email: { $regex: searchTerm, $options: "i" } },
      ],
    });
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: "employee is not available" });
  }
};



// update an employee
 const updateEmployee = async (req, res) => {
   try {
     if (req.body.firstName !== undefined) {
       res.employee.firstName = req.body.firstName;
     }
     if (req.body.lastName !== undefined) {
       res.employee.lastName = req.body.lastName;
     }
     if (req.body.email !== undefined) {
       res.employee.email = req.body.email;
     }
     if (req.body.salaryAmount !== undefined) {
       res.employee.salaryAmount = req.body.salaryAmount;
     }
     const updatedEmployee = await res.employee.save();
     res.json(updatedEmployee);
   } catch (err) {
     res.status(400).json({ message: "Failed to update employee." });
   }
 };




// Delete an employee
const deleteEmployee = async (req, res) => {
  const employeeId = req.params.employeeId; // Assuming the employee ID is passed as a route parameter

  try {
    // Find the employee by ID
    const employee = await Employee.findById(employeeId);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Remove the employee
    await employee.remove();

    return res.json({ message: "Employee deleted" });
  } catch (err) {
    console.error("Error deleting employee:", err);
    return res.status(500).json({ message: "Cannot delete employee" });
  }
};



module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    searchEmployee,
    updateEmployee,
    deleteEmployee
};


const Employee = require('../models/employee');

//create a new employee
const createEmployee = async  (req, res) => {
    try{
        const employee = new Employee(req.body);
        await employee.save();
        //send back the created employee
        res.status(201).json(employee);
    }catch(err){
        res.status(400).json({message: err.message}); 
}}

// get all employees
const getAllEmployees = async (req,res)=>{
    try{
       const employees=await Employee.find();
       res.json(employees);    
    } catch(err){
        res.status(500).json({message: err.message});
    }
};

//get an employee by its id
const getEmployeeById = async (req, res) => {
    res.json(req.employee);
};

// search employees
// search employees
const searchEmployee = async (req, res) => {
    try {
        const searchTerm = req.query.q; // Corrected variable name
        const employees = await Employee.find({
            $or: [
                { firstName: { $regex: searchTerm, $options: 'i' } },
                { lastName: { $regex: searchTerm, $options: 'i' } },
                { email: { $regex: searchTerm, $options: 'i' } }
            ]
        });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// update an employee
    
    const updateEmployee = async(req, res) => {
        try{
            if(req.body.firstName !=null) {
                res.employee.firstName = req.body.firstName;
            }
            if(req.body.lastNameName !=null) {
                res.employeelastNametName = req.bodylastNametName;
            }
            if(req.body.email !=null) {
                res.employee.email = req.body.email;
            }
            if(req.body.employeeNumber !=null) {
                res.employee.employeeNumber = req.body.employeeNumber
            }
            if(req.body.salaryAmount !=null) {
                res.employee.salaryAmount = req.body.salaryAmount;
            }
            const updateEmployee = await res.employee.save();
            res.json(updatedEmployee);
            
        }catch(err) {
            res.status(400).json({message:err.message});
        }
    }



// Delete an employee
const deleteEmployee = async(req, res) => {
    try{
        await res.employee.remove();
        res.json({message:'Employee deleted'});
    }catch(err) {
        res.status(500).json({message:err.message});
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


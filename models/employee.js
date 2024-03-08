const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please add your first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please add your last name']
    },
    email: {
        type: String,
        required: [true, 'Please add your email address'],
        unique: true, // Ensure email addresses are unique
        match: [ // Validate email format using a regex
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email address'
        ]
    },
    employeeNumber: {
        type: String, // Assuming you want employee number as a string
        unique: true, // Ensure employee numbers are unique
        required: true
    },
    salaryAmount: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model("employees", employeeSchema);

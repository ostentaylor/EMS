import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

function EmployeeFormDialog({ open, handleClose, employeeData }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    employeeNumber: "",
  });

  // If employeeData is provided, populate the form fields with its data
  // This is used for updating existing employee information
  React.useEffect(() => {
    if (employeeData) {
      setFormData({
        firstName: employeeData.firstName,
        lastName: employeeData.lastName,
        email: employeeData.email,
        employeeNumber: employeeData.employeeNumber,
      });
    }
  }, [employeeData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/employees/${employeeData.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to register employee.");
      }
      console.log("Employee registered successfully!");
      handleClose();
    } catch (error) {
      console.error("Error registering employee:", error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {employeeData ? "Update Employee" : "Register Employee"}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              {employeeData ? "Update" : "Register"}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EmployeeFormDialog;

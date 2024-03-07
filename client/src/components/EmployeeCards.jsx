import React, { useEffect, useState } from "react";
import { Card, CardHeader, Avatar, IconButton } from "@mui/material";
import { Edit, DeleteOutlined } from "@mui/icons-material";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import axios from "axios"; // Import axios for making API calls

function EmployeeCard() {
  // State to hold the employee data
  const [employeeData, setEmployeeData] = useState(null);

  // Fetch employee data when the component mounts
  useEffect(() => {
    fetchEmployeeData();
  }, []);
  // Function to fetch employee data from backend
  const fetchEmployeeData = async () => {
    try {
      // Make an API request to fetch employee data
      const response = await fetch("http://localhost:3000/employees");
      if (!response.ok) {
        throw new Error("Failed to fetch employee data");
      }
      const data = await response.json();
      // Update the employee data state with fetched data
      setEmployeeData(data);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  // Function to handle edit button click
  const handleEditClick = (employeeId) => {
    // Redirect the user to the Register page with the employee data
    // You can implement this functionality using React Router
    console.log("Edit clicked for employee with ID:", employeeId);
  };

  // Function to handle delete button click
  // Function to handle delete button click
  const handleDeleteClick = async (employeeNumber) => {
    // Prompt the user for confirmation before deleting the employee
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (confirmDelete) {
      try {
        // Make an API call to delete the employee data using the employee number
        await axios.delete(`http://localhost:3000/employees/${employeeNumber}`);
        console.log("Employee deleted successfully:", employeeNumber);
        // Refetch employee data to update the UI after deletion
        fetchEmployeeData();
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    }
  };

  // Return null if employeeData is not fetched yet
  if (!employeeData) {
    return null;
  }

  return (
    <Container Width="100%">
      <Grid
        container
        spacing={2}
        sx={{
          height: "100vh",
          width: "100%",
          marginTop: 9,
        }}
      >
        {employeeData.map((employee) => (
          <Grid item key={employee._id} xs={12} md={6} lg={4}>
            <Card
              sx={{
                bgcolor: "#f2f2f2",
                marginBottom: 2,
                ":hover": {
                  boxShadow: 20,
                },
              }}
            >
              <CardHeader
                avatar={<Avatar>{employee.firstName.charAt(0)}</Avatar>}
                title={`${employee.firstName} ${employee.lastName}`}
                subheader={`${employee.email} | Employee Number: ${employee.employeeNumber}`}
                action={[
                  <IconButton
                    key="edit"
                    onClick={() => handleEditClick(employee._id)}
                  >
                    <Edit />
                  </IconButton>,
                  <IconButton
                    key="delete"
                    onClick={() => handleDeleteClick(employee._id)}
                  >
                    <DeleteOutlined />
                  </IconButton>,
                ]}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default EmployeeCard;

import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Box
} from "@mui/material";
import { Edit, DeleteOutlined } from "@mui/icons-material";
import Container from "@mui/material/Container";
import axios from "axios"; // Import axios for making API calls

function EmployeeCard(props) {
  const [employeeData, setEmployeeData] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState("");
  const [editedLastName, setEditedLastName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = async () => {
    try {
      const response = await fetch("http://localhost:3000/employees");
      if (!response.ok) {
        throw new Error("Failed to fetch employee data");
      }
      const data = await response.json();
      setEmployeeData(data);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setEditedFirstName(employee.firstName);
    setEditedLastName(employee.lastName);
    setEditedEmail(employee.email);
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handleEditSubmit = async () => {
    try {
      const updatedEmployee = {
        ...selectedEmployee,
        firstName: editedFirstName,
        lastName: editedLastName,
        email: editedEmail,
      };
      await axios.patch(
        `http://localhost:3000/employees/${selectedEmployee.employeeId}`,
        updatedEmployee
      );
      fetchEmployeeData();
      setEditDialogOpen(false);
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const handleDeleteClick = async (employeeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/employees/${employeeId}`);
        fetchEmployeeData();
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    }
  };

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
                    onClick={() => handleEditClick(employee)}
                  >
                    <Edit />
                  </IconButton>,
                  <IconButton
                    key="delete"
                    onClick={() => handleDeleteClick(employee.employeeId)}
                  >
                    <DeleteOutlined />
                  </IconButton>,
                ]}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle sx={{ mb: 2 }}>Edit Employee Details</DialogTitle>

        <DialogContent sx={{ mb: 3 }}>
          <Box component="form">
           
            <TextField
              label="First Name"
              value={editedFirstName}
              onChange={(e) => setEditedFirstName(e.target.value)}
              fullWidth
              sx={{ mb: 2 }} // Add margin-bottom
            />
            <TextField
              label="Last Name"
              value={editedLastName}
              onChange={(e) => setEditedLastName(e.target.value)}
              fullWidth
              sx={{ mb: 2 }} // Add margin-bottom
            />
            <TextField
              label="Email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
              fullWidth
              sx={{ mb: 1 }} // Add margin-bottom
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose}>Cancel</Button>
          <Button onClick={handleEditSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default EmployeeCard;

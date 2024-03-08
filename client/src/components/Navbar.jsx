import React, { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EmployeeFormDialog from "../pages/EmployeeFormDialog"; // Import the EmployeeFormDialog component
import SearchIcon from "@mui/icons-material/Search";

function Navbar({ onMenuToggle }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openRegisterDialog, setOpenRegisterDialog] = useState(false); // State to control the visibility of the register dialog

  useEffect(() => {
    setIsLoading(true);
    // Fetch employee data from your backend API
    fetchEmployees(searchQuery)
      .then((data) => {
        setSearchResults(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
        setIsLoading(false);
      });
  }, [searchQuery]); // Update search results whenever searchQuery changes

  // Function to fetch employees from the backend based on the search query
  const fetchEmployees = async (query) => {
    try {
      const response = await fetch(
        `http://localhost:3000/employees/search?q=${query}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching employee data:", error);
      return [];
    }
  };



  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleRegisterClick = () => {
    setOpenRegisterDialog(true); // Open the register dialog when the Register button is clicked
  };

  const handleCloseRegisterDialog = () => {
    setOpenRegisterDialog(false); // Close the register dialog
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={onMenuToggle}
          ></IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            EMS
          </Typography>

          {/* Combined Search Input and Button */}
          <Box sx={{ display: "flex" }}>
            <input
              type="text"
              placeholder="Search…"
              value={searchQuery}
              onChange={handleSearchChange}
              style={{ marginRight: "8px", padding: "8px" }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => setSearchResults([])} // Clear search results when search button is clicked
            >
              <SearchIcon />
            </Button>
          </Box>

          {/* Register Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleRegisterClick}
          >
            Register
          </Button>

          {/* EmployeeFormDialog for Register */}
          <EmployeeFormDialog
            open={openRegisterDialog}
            handleClose={handleCloseRegisterDialog}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;

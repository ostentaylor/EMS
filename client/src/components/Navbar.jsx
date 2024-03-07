import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Sidemenu from "./Sidemenu";

function Navbar({ onMenuToggle }) {
    const [isSidemenuOpen, setIsSidemenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setIsSidemenuOpen(!isSidemenuOpen);
    };
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Fetch employee data from your backend API
    fetch("http://localhost:3000/employees")
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data); // Assuming the API returns an array of employee objects
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
        setIsLoading(false);
      });
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filteredResults = searchResults.filter(
      (employee) =>
        employee.name?.toLowerCase().includes(query.toLowerCase()) ||
        employee.email?.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "whitesmoke",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

 


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
          >
            {/* <IconButton
              component={Link}
              to="/sidemenu"
              color="inherit"
              aria-label="menu"
            > */}
            <MenuIcon />
            {/* </IconButton> */}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            EMS
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {isLoading && <p>Loading...</p>}
            {searchResults.length > 0 && searchQuery !== "" && (
              <Box
                sx={{
                  position: "absolute",
                  zIndex: 1,
                  marginTop: 1,
                  width: "100%",
                  maxHeight: 200,
                  overflow: "auto",
                  bgcolor: "white",
                  border: "1px solid lightgray",
                  borderRadius: 1,
                  boxShadow: 1,
                }}
              >
                {searchResults.map((result) => (
                  <Typography
                    key={result.id}
                    variant="body1"
                    sx={{
                      p: 1,
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "lightgray",
                      },
                    }}
                  >
                    {result.name} - {result.email}
                  </Typography>
                ))}
              </Box>
            )}
          </Search>
        </Toolbar>
      </AppBar>
      <Sidemenu open={isSidemenuOpen} onClose={handleMenuToggle} />
    </Box>
  );
}

export default Navbar;








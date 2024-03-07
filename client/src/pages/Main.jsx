import React from "react";
import { Grid } from "@mui/material";

import EmployeeCards from "../components/EmployeeCards";


function Main() {
  return (
    <div style={{ backgroundColor: "#e6f7ff", minHeight: "100vh" }}>
      
      <Grid>
        {/* Other components rendered here */}
        <EmployeeCards />
      </Grid>
      
    </div>
  );
}

export default Main;

import { Grid } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
// import SideMenu from '../components/Sidemenu'
import EmployeeCards from '../components/EmployeeCards'
// import Button from '../components/Button'
import Footer from '../components/Footer'



function Main() {
  return (
    <div style={{ backgroundColor: "#e6f7ff", minHeight: "100vh" }}>
      <Navbar />
      <Grid>
        {/* <SideMenu /> */}
        <EmployeeCards />
        {/* <Button /> */}
        <Footer />
      </Grid>
    </div>
  );
}

export default Main
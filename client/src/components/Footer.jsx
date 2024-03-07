import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function Copyright() {
  return (
    <Typography variant="body1" color="text.secondary">
      {'Copyright © '}
     
    </Typography>
  );
}




function Footer() {
  return (
    <div>
      <Box
        component="footer"
        sx={{
          
          width: "100%",
          display: "inline-block",
          p: 2,
          mx: 0,
          backgroundColor: "#1976d2",
        }}
      >
        <Container maxWidth="sm" sx={{ height: "20%" }}>
          {/* <Typography variant="body1">
            My sticky footer can be found here.
          </Typography> */}
          <Copyright />
        </Container>
      </Box>
    </div>
  );
}

export default Footer
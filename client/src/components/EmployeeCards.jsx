import React from 'react'

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { DeleteOutlined, Edit } from "@mui/icons-material"
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from '@mui/material';

export default function EmployeeCards() {
  return (
    <Container Width="100%">
      <Grid>
        <Grid item xs={12} md={6} lg={8}>
          <Box
            sx={{
              
              height: "100vh",
              width: "100%",
              marginTop: 9,
            }}
          >
            <Card
              sx={{ bgcolor: "#f2f2f2", marginBottom: 1 }}
              xs={12}
              md={6}
              lg={8}
            >
              <CardHeader
                avatar={<Avatar aria-label="recipe"></Avatar>}
                action={[
                  <IconButton key="edit">
                    <Edit />
                  </IconButton>,
                  <IconButton key="delete">
                    <DeleteOutlined />
                  </IconButton>,
                ]}
                title="CardHeader Example"
                subheader="A flexbox with avatar, title, subtitle and action"
              />
            </Card>
            <Card sx={{ bgcolor: "#f2f2f2", marginBottom: 1 }}>
              <CardHeader
                avatar={<Avatar aria-label="recipe"></Avatar>}
                action={[
                  <IconButton key="edit">
                    <Edit />
                  </IconButton>,
                  <IconButton key="delete">
                    <DeleteOutlined />
                  </IconButton>,
                ]}
                title="CardHeader Example"
                subheader="A flexbox with avatar, title, subtitle and action"
              />
            </Card>
            <Card sx={{ bgcolor: "#f2f2f2", marginBottom: 1 }}>
              <CardHeader
                avatar={<Avatar aria-label="recipe"></Avatar>}
                action={[
                  <IconButton key="edit">
                    <Edit />
                  </IconButton>,
                  <IconButton key="delete">
                    <DeleteOutlined />
                  </IconButton>,
                ]}
                title="CardHeader Example"
                subheader="A flexbox with avatar, title, subtitle and action"
              />
            </Card>
            <Card sx={{ bgcolor: "#f2f2f2", marginBottom: 1 }}>
              <CardHeader
                avatar={<Avatar aria-label="recipe"></Avatar>}
                action={[
                  <IconButton key="edit">
                    <Edit />
                  </IconButton>,
                  <IconButton key="delete">
                    <DeleteOutlined />
                  </IconButton>,
                ]}
                title="CardHeader Example"
                subheader="A flexbox with avatar, title, subtitle and action"
              />
            </Card>
            <Card sx={{ bgcolor: "#f2f2f2", marginBottom: 1 }}>
              <CardHeader
                avatar={<Avatar aria-label="recipe"></Avatar>}
                action={[
                  <IconButton key="edit">
                    <Edit />
                  </IconButton>,
                  <IconButton key="delete">
                    <DeleteOutlined />
                  </IconButton>,
                ]}
                title="CardHeader Example"
                subheader="A flexbox with avatar, title, subtitle and action"
              />
            </Card>
            <Card sx={{ bgcolor: "#f2f2f2", marginBottom: 1 }}>
              <CardHeader
                avatar={<Avatar aria-label="recipe"></Avatar>}
                action={[
                  <IconButton key="edit">
                    <Edit />
                  </IconButton>,
                  <IconButton key="delete">
                    <DeleteOutlined />
                  </IconButton>,
                ]}
                title="CardHeader Example"
                subheader="A flexbox with avatar, title, subtitle and action"
              />
            </Card>
            <Card sx={{ bgcolor: "#f2f2f2", marginBottom: 1 }}>
              <CardHeader
                avatar={<Avatar aria-label="recipe"></Avatar>}
                action={[
                  <IconButton key="edit">
                    <Edit />
                  </IconButton>,
                  <IconButton key="delete">
                    <DeleteOutlined />
                  </IconButton>,
                ]}
                title="CardHeader Example"
                subheader="A flexbox with avatar, title, subtitle and action"
              />
            </Card>
            <Card sx={{ bgcolor: "#f2f2f2", marginBottom: 1 }}>
              <CardHeader
                avatar={<Avatar aria-label="recipe"></Avatar>}
                action={[
                  <IconButton key="edit">
                    <Edit />
                  </IconButton>,
                  <IconButton key="delete">
                    <DeleteOutlined />
                  </IconButton>,
                ]}
                title="CardHeader Example"
                subheader="A flexbox with avatar, title, subtitle and action"
              />
            </Card>
            
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}



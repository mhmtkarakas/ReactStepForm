import React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const FormUserDetails = ({ nextStep, values, handeleChange }) => {
  const continueHandler = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <ThemeProvider theme={theme}>
      <Dialog open fullWidth maxWidth="sm">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
               Enter User Details
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField
        placeholder="Enter Your First Name"
        label="First Name"
        onChange= {handeleChange('firstName')}
        value={values.firstName}
        margin="normal"
        fullWidth />
        <br />
        <TextField
        placeholder="Enter Your Last Name"
        label="Last Name"
        onChange= {handeleChange('lastName')}
        value={values.lastName}
        margin="normal"
        fullWidth />
        <br />
        <TextField
        placeholder="Enter Your Email"
        label="Email"
        onChange= {handeleChange('Email')}
        value={values.email}
        margin="normal"
        fullWidth />
      </Dialog>
    </ThemeProvider>
  );
};

export default FormUserDetails;

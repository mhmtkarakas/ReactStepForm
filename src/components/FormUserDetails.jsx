import React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const FormUserDetails = ({ nextStep, values, handleChange, errors }) => {
  const continueHandler = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog open fullWidth maxWidth="md">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Enter User Details</Typography>
          </Toolbar>
        </AppBar>
        <Box padding={3}>
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            onChange={handleChange("firstName")}
            value={values.firstName}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            onChange={handleChange("lastName")}
            value={values.lastName}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Email"
            label="Email"
            onChange={handleChange("email")}
            value={values.email}
            error={Boolean(errors.email)}
            helperText={errors.email}
            margin="normal"
            fullWidth
          />
          <br />
          <Box mt={2}>
            <Button
              color="primary"
              variant="contained"
              onClick={continueHandler}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Dialog>
    </ThemeProvider>
  );
};

export default FormUserDetails;

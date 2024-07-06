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

const FormPersonalDetails = ({ nextStep, values, handeleChange, prevStep }) => {
  const continueHandler = (e) => {
    e.preventDefault();
    nextStep();
  };
  const backHandler = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <ThemeProvider theme={theme}>
      <Dialog open fullWidth maxWidth="md">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Enter Personal Details</Typography>
          </Toolbar>
        </AppBar>
        <Box padding={3}>
          <TextField
            placeholder="Enter Your Occupation"
            label="Occupation"
            onChange={handeleChange("occuupation")}
            value={values.occupation}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your City"
            label="City"
            onChange={handeleChange("city")}
            value={values.city}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Bio"
            label="Bio"
            onChange={handeleChange("bio")}
            value={values.bio}
            margin="normal"
            fullWidth
          />
          <br />
          <Box mt={2} display="flex">
            <Box mr={2}>
            <Button
              color="primary"
              variant="contained"
              onClick={continueHandler}
            >
              Continue
            </Button>
            </Box>
            <Button color="primary" variant="outlined" onClick={backHandler}>
              Back
            </Button>
          </Box>
        </Box>
      </Dialog>
    </ThemeProvider>
  );
};

export default FormPersonalDetails;

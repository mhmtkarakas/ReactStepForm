import React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const Success = ({ prevStep }) => {
  const backHandler = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <ThemeProvider theme={theme}>
      <Dialog open fullWidth maxWidth="md">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Enter Confirm Details</Typography>
          </Toolbar>
        </AppBar>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further instructions.</p>
        </Box>
        <Box padding={3}>
          <Box mt={2} display="flex">
            <Button color="primary" variant="outlined" onClick={backHandler}>
              Back
            </Button>
          </Box>
        </Box>
      </Dialog>
    </ThemeProvider>
  );
};

export default Success;

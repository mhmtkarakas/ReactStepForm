import React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { List,ListItem,ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const Confirm = ({ values, prevStep, nextStep }) => {
    const { firstName, lastName, email, occupation, city, bio } = values;
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
            <Typography variant="h6">Enter Confirm Details</Typography>
          </Toolbar>
        </AppBar>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%">
            <Box width="50%">
        <List>
            <ListItem>
                <ListItemText primary="First Name" secondary={firstName}/>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemText primary="Last Name" secondary={lastName}/>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemText primary="Email" secondary={email}/>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemText primary="Occupation" secondary={occupation}/>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemText primary="City" secondary={city}/>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemText primary="Bio" secondary={bio}/>
            </ListItem>
        </List>
        </Box>
        </Box>
        <Box padding={3}>
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

export default Confirm;
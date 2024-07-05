import React from 'react'
import Dialog from "@mui/material/Dialog";
import  AppBar  from '@mui/material/AppBar';
import  TextField  from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import  Toolbar  from '@mui/material/Toolbar';
import  Typography  from '@mui/material/Typography';
import {createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();



const FormUserDetails = ({nextStep,values,handeleChange}) => {
  const continueHandler = (e) => {
    e.preventDefault();
    nextStep();
  
  }
  return (
    <div>FormUserDetails</div>
  )
}

export default FormUserDetails
import React, { useState} from 'react'
import {  BrowserRouter as Router } from 'react-router-dom';
import RouteRoute from './Routes';
import Loader from '../src/components/loader/Loader.js'
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#004db5',
    },
    secondary: {
      main: '#f69909',
    },
    white: {
      main: '#fff',
    },
    danger: {
      main: '#b80413',
    },
  }
});

function App() {
  const [loader, setLoader] = useState (false);
  return (
    <>
    <ThemeProvider theme={theme}>
    <Router>
    {loader && <Loader></Loader>}
    <RouteRoute setLoader={setLoader}/>
    </Router>
    </ThemeProvider>
  </>
  );
}

export default App;

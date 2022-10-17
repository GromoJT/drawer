import React from "react";
import { createRoot } from 'react-dom/client';
import { createTheme,ThemeProvider } from '@mui/material/styles';

import 'typeface-roboto';
import "./index.css";
import MuiDrawerMain from "./components/MuiDrawerMain";



const container = document.getElementById('app');
const root = createRoot(container);


const theme = createTheme({
  palette:{
    action:{
      disabled:'brown'
    }
  }

});

const App = () => (
  <ThemeProvider theme={theme}>
    <MuiDrawerMain />
  </ThemeProvider>
    

      
);
root.render(<App/>);

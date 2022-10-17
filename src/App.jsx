import React from "react";
import { createRoot } from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import 'typeface-roboto';
import "./index.css";
import MuiDrawerMain from "./components/MuiDrawerMain";

const container = document.getElementById('app');
const root = createRoot(container);

const App = () => (
  <StyledEngineProvider injectFirst>
    <MuiDrawerMain/>
  </StyledEngineProvider>
);
root.render(<App/>);

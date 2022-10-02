import React from "react";
import { createRoot } from 'react-dom/client';
import MuiDrawer from "./components/MuiDrawer";

import "./index.css";

const container = document.getElementById('app');
const root = createRoot(container);

const App = () => (
  <>
      <MuiDrawer/>
  </>
  
);
root.render(<App/>);

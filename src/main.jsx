import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from "react";
import "./css/bootstrap-min.css";
import "./css/hover-min.css";
import "./css/style.sass";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

)

<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Scripts } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
    <BrowserRouter>
        <App />
          
    </BrowserRouter>,
    document.getElementById("root")
    
   
);
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
>>>>>>> 6ebbc7d8cad194e34925397ccecb2085c2ac5a78

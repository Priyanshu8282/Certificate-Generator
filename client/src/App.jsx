<<<<<<< HEAD
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import CertificatePage from './components/Certificate';

import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
  
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/certificate/:id" component={() => <CertificatePage data={data} />} />
          
        </Routes>
        <Footer />
      </div>
   
  );
}

export default App;
=======
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import MainPage from './Component/MainPage/MainPage';




function App() {
  return (
  <Router> 
    <Routes> 
    <Route path='/' element={<MainPage />} />
    <Route path="/certificate/:id" component={() => <CertificatePage data={data} />} />
    </Routes>
  </Router>
  )
}

export default App
>>>>>>> 6ebbc7d8cad194e34925397ccecb2085c2ac5a78

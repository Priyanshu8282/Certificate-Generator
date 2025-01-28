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
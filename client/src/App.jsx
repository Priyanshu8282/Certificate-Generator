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
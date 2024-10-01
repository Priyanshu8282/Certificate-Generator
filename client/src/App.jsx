import React from 'react'
import Login from './Component/Auth/login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './Component/Auth/register';
import './App.css';
import MainPage from './Component/MainPage/MainPage';




function App() {
  return (
  <Router> 
    <Routes> 
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register/>} />
    <Route path='/dashboard' element={<MainPage />} />
    <Route path="/certificate/:id" component={() => <CertificatePage data={data} />} />
    </Routes>
  </Router>
  )
}

export default App
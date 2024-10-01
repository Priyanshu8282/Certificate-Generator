import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './register.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://certificate-generator-g107.onrender.com/auth/register', formData);
      const { token } = response.data;
      localStorage.setItem('token', token);
      toast.success('User registered successfully');
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      toast.error(error.response.data.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-container">
    <div className="register-container"> 
        <ToastContainer />
        <h1 className="register-title"> Sign Up </h1>
        <form className="register-form" onSubmit={handleSubmit}>
            <label className="register-label">
                Name:
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="register-input"
                  value={formData.name}
                  onChange={handleChange}
                />
            </label>
            
            <label className="register-label">
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="register-input"
                  value={formData.email}
                  onChange={handleChange}
                />
            </label>
         
            <label className="register-label">
                Password:
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="register-input"
                  value={formData.password}
                  onChange={handleChange}
                />
            </label>
        
            <button type="submit" className="register-button">Sign Up</button>
            <p>Already have an account? <a href="/">Log in now</a></p>
        </form>
    </div>
    </div>
  );
}

export default Register;

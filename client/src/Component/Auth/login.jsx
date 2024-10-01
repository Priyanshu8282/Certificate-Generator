import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';
import { useNavigate } from 'react-router-dom';



function Login() {
  const navigate=useNavigate();

  const [formData, setFormData] = useState({
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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://certificate-generator-g107.onrender.com/auth/login', formData);
      const { token } = response.data;
      localStorage.setItem('token', token);
      toast.success('Login successful');
      navigate('/dashboard');
    
    } catch (error) {
      toast.error(error.response.data.message || 'Login failed');
    }
  };

  return (
    <div className="auth-container">
    <div className="login-container"> 
        <ToastContainer />
        <h1 className="login-title"> Login </h1>
        <form className="login-form" onSubmit={handleLogin}>
            <label className="login-label">
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="Enter the email"
                  className="login-input"
                  value={formData.email}
                  onChange={handleChange}
                />
            </label>
            <label className="login-label">
                Password:
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="login-input"
                  value={formData.password}
                  onChange={handleChange}
                />
            </label>
        
            <button type="submit" className="login-button">Login</button>
            <p>Don't have an account? <a href="/register">Sign Up</a></p>
        </form>
    </div>
    </div>
  );
}

export default Login;

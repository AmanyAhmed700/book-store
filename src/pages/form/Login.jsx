import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import "./Register";
import { ToastContainer, toast } from 'react-toastify';
import './forms.css';
import loginimg  from '../../images/contact.jpg'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ initialize

  const handlesubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") return toast.error("Email is required");
    if (password.trim() === "") return toast.error("Password is required");

    // ✅ You can add real authentication logic here
    // Simulate successful login and redirect
    toast.success("Login successful!");
    setTimeout(() => navigate("/"), 1000); // redirect after a short delay
  }

  return (
    <div className='form-wrapper'>
     
      <ToastContainer theme="colored" position="top-right" autoClose={2000} />
      <form onSubmit={handlesubmit} className="form">
  <div className="form-content">
    <h1 className='form-title'>Login to your account</h1>
    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter Your Email' />
    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter Your Password' />
    <button className="btn">Login</button>
    <div className="form-footer">
      Don't have an account?
      <Link to='/register' className='reg'> Register</Link>
    </div>
  </div>

  <div className="form-img">
    <img src={loginimg} alt="login" />
  </div>
</form>

    </div>
  );
}

export default Login;

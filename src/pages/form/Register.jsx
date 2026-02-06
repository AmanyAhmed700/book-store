import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './forms.css'; // Import same CSS
import registerImg from '../../images/registerImg.jpg'; // Replace with your image path

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return toast.error("UserName is required");
    if (email.trim() === "") return toast.error("Email is required");
    if (password.trim() === "") return toast.error("Password is required");

    toast.success("Register successful!");
    setTimeout(() => navigate("/login"), 1000); // Redirect after a short delay
  };

  return (
    <div className='form-wrapper'>
      <ToastContainer theme="colored" position="top-right" autoClose={2000} />
       <form onSubmit={handleSubmit} className="form">
        <div className="form-content">
          <h1 className='form-title'>Create New Account</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter Your UserName' />
          <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter Your Email' />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter Your Password' />
          <button className="btn">Register</button>
          <div className="form-footer">
            Already have an account?
            <Link to='/login' className='reg'>Login</Link>
          </div>
        </div>
      
        <div className="form-img">
          <img src={registerImg} alt="login" />
        </div>
      </form>
    </div>
  );
};

export default Register;

import React, { useState } from 'react';
import './Signup.css';
import bgimg from '../assets/Login page bg.png';
import threeD from '../assets/file.png';
import google from '../assets/google.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Signup = () => {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userFirstname = /^[A-Za-z ]+$/;
    const userLastname = /^[A-Za-z ]+$/;
    const userEmailRegex = /^[a-z][a-z0-9]*@gmail\.com$/;

    if (!userFirstname.test(firstname)) {
      alert("First name can only contain alphabets");
    } else if (!userLastname.test(lastname)) {
      alert("Last name can only contain alphabets");
    } else if (!userEmailRegex.test(email)) {
      alert("The email should contain at least one alphabet and be a valid Gmail address");
    } else {
      const userData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
      };

      axios.post("https://squad56-chinmayee-pranjal-janhavi.onrender.com/signup", userData)
        .then((res) => {
          alert(res.data);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          
          alert("An error occurred. Please try again.");
        });
    }
  }

  return (
    <>
      <div className='signup-backgrd'>
        <div className='right-design'>
          <img className='bg-img' src={bgimg} alt="" />
          <h1>Unleash your inner artist with AI magic!</h1>
          <img className='threed-img' src={threeD} alt="" />
        </div>

        <div className='signup-form'>
          <h2 className='signup-text'>Create an Account</h2>

          <form onSubmit={handleSubmit}> 
            <div className='input-box'>
              <input 
                className='firstname-input' 
                type="text" 
                name="First name" 
                required="required"
                value={firstname} 
                onChange={(e) => setFirstName(e.target.value)}  
              />
              <span>First name</span>
              <input 
                className='last-input' 
                type="text" 
                name="Last name" 
                required="required"
                value={lastname} 
                onChange={(e) => setLastName(e.target.value)}  
              />
              <span>Last name</span>
            </div>

            <div className='input-box'>
              <input 
                className='email-input' 
                type="email" 
                name="Email" 
                required="required"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}  
              />
              <span>Email</span>
            </div>

            <div className='input-box'>
              <input 
                className='password-input' 
                type="password"  
                name="Password" 
                required="required"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}  
              />
              <span>Password</span>
            </div>

            <button type='submit' className='signup-btn'>Signup</button>
          </form>

          <div className='login-text'>
            <h3>Already have an account?</h3>
            <NavLink to={"/login"}><h3>Sign in the website</h3></NavLink>
          </div>

          <div className='or'>
            <div></div>
            <h4>or</h4>
          </div>

          <button className='google-btn'>
            <img src={google} alt="" />
            <h3>Signup with Google</h3>
          </button>
        </div>
      </div>
      <ToastContainer
        position="top"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default Signup;

import React, { useEffect, useState } from 'react'
import './Login.css'
import bgimg from '../assets/Login page bg.png'
import threeD from '../assets/file.png'
import google from '../assets/google.png'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      alert("Name is required")
      return
    }
    else if (password.trim() === "") {
      alert("Password is required")
      return
    }

    const loginData = {
      name: name,
      password: password
    }

    axios.post("https://squad56-chinmayee-pranjal-janhavi.onrender.com/login", loginData)
      .then((res) => {
      
        if (res.data.token) {
          localStorage.setItem("token", res.data.token)
          localStorage.setItem("Username", res.data.name)
          // localStorage.setItem("id", res.data.id)

          alert("Login Successful!")
          setLoggedIn(true)

          setTimeout(() => {
            navigate("/")
          }, 1500);

        }
        else {
          alert("User not found. Please create an account.")
        }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred. Please try again.");
      });
  }

  return (
    <div className='login-backgrd'>

      {/* login form */}
      <div className='login-form'>
        <h2 className='logintext'>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className='input-box'>
            <input
              className='firstname-input'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span>Name</span>
          </div>

          <div className='input-box'>
            <input
              className='lastname-input'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span>Password</span>
          </div>

          <button type="submit" className='login-btn'>Login</button>
        </form>

        <div className='signuptext'>
          <h3>Don’t have an account?</h3>
          <NavLink to={"/signup"}><h3>Create an account</h3></NavLink>
        </div>

        <div className='or'>
          <div></div>
          <h4>or</h4>
        </div>

        <button className='google-btn'>
          <img src={google} alt="" />
          <h3>Login with Google</h3>
        </button>

      </div>

      <div className='right-design'>
        <img className='bg-img' src={bgimg} alt="" />
        <h1>Unleash your inner artist with AI magic!</h1>
        <img className='threed-img' src={threeD} alt="" />
      </div>

    </div>
  )
}

export default Login

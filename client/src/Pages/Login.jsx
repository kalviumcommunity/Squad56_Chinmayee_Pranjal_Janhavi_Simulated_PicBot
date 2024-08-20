import React from 'react'
import './Login.css'
import bgimg from '../assets/Login page bg.png'
import threeD from '../assets/file.png'
import google from '../assets/google.png'

const Login = () => {
  return (
    <div className='login-backgrd'>

        {/* login form */}
      <div className='login-form'>
        <h2 className='login-text'>Login</h2>

        <div className='input-box'>
            <input className='firstname-input' type="text" name="First name" required="required"/>
            <span>First name</span>
        </div>

        <div className='input-box'>
            <input className='lastname-input' type="text" name="Password" required="required"/>
            <span>Password</span>
        </div>

        <button className='login-btn'>Login</button>

        <div className='signup-text'>
            <h3 >Don’t have an account?</h3>
            <h3>Create an account</h3>
        </div>

        <div className='or'>
            <div></div>
            <h4>or</h4>
        </div>
        
        <button className='google-btn'>
            <img src={google} alt="" />
            <h3>Login with google</h3>
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
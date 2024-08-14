import React from 'react'
import './Signup.css'
import bgimg from '../assets/Login page bg.png'
import threeD from '../assets/file.png'
import google from '../assets/google.png'

const Signup = () => {
  return (
    <div className='signup-backgrd'>


        <div className='right-design'>
            <img className='bg-img' src={bgimg} alt="" />
            <h1>Unleash your inner artist with AI magic!</h1>
            <img className='threed-img' src={threeD} alt="" />
        </div>  
      
        {/* signup form */}
      <div className='signup-form'>
        <h2 className='signup-text'>Create an Account</h2>

        <div className='input-box'>
            <input className='firstname-input' type="text" name="First name" required="required"/>
            <span>First name</span>
            <input className='last-input' type="text" name="Last name" required="required"/>
            <span>Last name</span>
        </div>

        <div className='input-box'>
            <input className='email-input' type="Email" name="Email" required="required"/>
            <span>Email</span>
        </div>

        <div className='input-box'>
            <input className='password-input' type="text" name="Password" required="required"/>
            <span>Password</span>
        </div>

        <button className='signup-btn'>Signup</button>

        <div className='login-text'>
            <h3 >Don’t have an account?</h3>
            <h3>Create an account</h3>
        </div>

        <div className='or'>
            <div></div>
            <h4>or</h4>
        </div>
        
        <button className='google-btn'>
            <img src={google} alt="" />
            <h3>Signup with google</h3>
        </button>
        
      </div>
    </div>
  )
}

export default Signup
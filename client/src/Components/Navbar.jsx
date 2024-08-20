import React from 'react'
import Logo from '../assets/logo.png'
import Heart from '../assets/saved.png'
import './Navbar.css'
// import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="navbar">
        <img className='logo' src={Logo} alt="logo" />
        <div className="icons">

            <p>Community</p>
            <p>About us</p>
            <p>Feedback</p>
           <p className='createAccount'>Login</p>
            <img className="likes" src = {Heart} alt="like" />
        </div>
    </div>
    </>
  )
}

export default Navbar
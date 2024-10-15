import React from 'react'
import Logo from '../assets/logo.png'
import Heart from '../assets/saved.png'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="navbar">
        <img className='logo' src={Logo} alt="logo" />
        <div className="icons">

            <NavLink to={"/features"}><p>Features</p></NavLink>
            <NavLink to={"/creators"}><p>About us</p></NavLink>
            <NavLink to={"/feedback"}><p>Feedback</p></NavLink>
           <NavLink to={"/login"}><p className='createAccount'>Login</p></NavLink>
            <NavLink to={"/liked"}><img className="likes" src = {Heart} alt="like" /></NavLink>
        </div>
    </div>
    </>
  )
}

export default Navbar
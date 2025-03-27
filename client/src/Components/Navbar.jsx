import Logo from '../assets/logo.png'
import Heart from '../assets/saved.png'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="navbar">
        <NavLink to="/"><img className='logo' src={Logo} alt="logo" /></NavLink>
        <div className="icons">

            <NavLink to={"/features"}><p>Features</p></NavLink>
           <NavLink to={"/login"}><p className='createAccount'>Login</p></NavLink>
            <NavLink to={"/liked"}><img className="likes" src = {Heart} alt="like" /></NavLink>
        </div>
    </div>
    </>
  )
}

export default Navbar
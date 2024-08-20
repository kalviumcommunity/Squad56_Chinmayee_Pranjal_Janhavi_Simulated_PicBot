import React from 'react'
import "./Generator.css"
import Logo from '../assets/logo.png'
import Heart from '../assets/saved.png'
import ele1 from "../assets/elephant1.jpeg"
import ele2 from "../assets/elephant2.jpeg"
import ele3 from "../assets/elephant3.jpeg"
import ele4 from "../assets/elephant4.jpeg"
import ele5 from "../assets/elephant5.jpeg"
import ele6 from "../assets/elephant6.jpeg"
import { RiDownload2Fill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoIosShareAlt } from "react-icons/io";

function Generator() {
  return (
    <>
    <nav className="nav">
      <div className="logo">
        <img src={Logo} alt="PICBOT" />
        
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Baby elephant on a ball" />
        <button className="search-button">search</button>
      </div>

      <div className="heart-icon">
        <span><img src={Heart} alt="" /></span>
      </div>
    </nav>
    
    <div className='display'>
  <div className="image-container">
    <img width={400} src={ele1} alt="" />
    <div className="overlay">
      <RiDownload2Fill className="icon" /> 
      <CiHeart className="icon" /> 
      <IoIosShareAlt className="icon" />
    </div>
  </div>
  <div className="image-container">
    <img width={400} src={ele2} alt="" />
    <div className="overlay">
      <RiDownload2Fill className="icon" /> 
      <CiHeart className="icon" /> 
      <IoIosShareAlt className="icon" />
    </div>
  </div>
  <div className="image-container">
    <img width={400} src={ele3} alt="" />
    <div className="overlay">
      <RiDownload2Fill className="icon" /> 
      <CiHeart className="icon" /> 
      <IoIosShareAlt className="icon" />
    </div>
  </div>
  <div className="image-container">
    <img width={400} src={ele4} alt="" />
    <div className="overlay">
      <RiDownload2Fill className="icon" /> 
      <CiHeart className="icon" /> 
      <IoIosShareAlt className="icon" />
    </div>
  </div>
  <div className="image-container">
    <img width={400} src={ele5} alt="" />
    <div className="overlay">
      <RiDownload2Fill className="icon" /> 
      <CiHeart className="icon" /> 
      <IoIosShareAlt className="icon" />
    </div>
  </div>
  <div className="image-container">
    <img width={400} src={ele6} alt="" />
    <div className="overlay">
      <RiDownload2Fill className="icon" /> 
      <CiHeart className="icon" /> 
      <IoIosShareAlt className="icon" />
    </div>
  </div>
</div>

    </>
  )
}

export default Generator
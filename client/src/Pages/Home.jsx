import React from 'react'
import Navbar from "../Components/Navbar"
import Homepic from "../assets/Home.png"
import './Home.css'

function Home() {
  return (
    <div>
        <Navbar/>
        <div className="aboutweb">
            <div className="text">
                    <h1>Picbot, Where Imagination Meets Innovation!</h1>
                    <p>Dive into a world where your creative ideas come to life with just a few clicks. Our AI-powered image generator is designed to transform your thoughts into stunning visuals, effortlessly and instantly.</p>
                    <div className="generate">
                        <input type="text" />
                        <button> ✨Generate</button>
                    </div>
                </div>   
                <img src={Homepic} alt="image" />
        </div>
    </div>
    
  )
}

export default Home
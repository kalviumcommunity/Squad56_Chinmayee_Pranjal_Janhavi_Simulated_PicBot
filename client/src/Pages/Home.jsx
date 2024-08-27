import React, { useEffect, useRef } from 'react';
import Navbar from "../Components/Navbar";
import Homepic from "../assets/Home.png";
import './Home.css';
import { NavLink } from 'react-router-dom';

function Home() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 } 
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect(); 
  }, []);

  return (
    <div>
      <Navbar />
      <div className="aboutweb">
        <div className="text" ref={textRef}>
          <h1>Picbot, Where Imagination Meets Innovation!</h1>
          <p>Dive into a world where your creative ideas come to life with just a few clicks. Our AI-powered image generator is designed to transform your thoughts into stunning visuals, effortlessly and instantly.</p>
          <div className="generate">
            <input type="text" />
            <NavLink to={"/aigenerator"}><button className='generateBtn'> ✨Generate</button></NavLink>
          </div>
        </div>
        <img src={Homepic} alt="Picbot Home" ref={imageRef} />
      </div>
    </div>
  );
}

export default Home;

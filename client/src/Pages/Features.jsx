import React, { useEffect, useRef } from 'react';
import './Features.css';
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.png';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import Navbar from '../Components/Navbar';

const featuresData = [
  {
    id: 1,
    title: "User Authentication",
    description: "Secure user authentication ensures that only registered users can access the platform, protecting user data and privacy.",
    image: img1, 
  },
  {
    id: 2,
    title: "Image Categories",
    description: "Organize generated images into various categories for easy browsing and selection.",
    image: img2,
  },
  {
    id: 3,
    title: "Image Download",
    description: "Allows users to download high-quality generated images with a single click.",
    image: img3,
  },
  {
    id: 4,
    title: "User Feedback",
    description: "Collect feedback from users to continuously improve the platform and add new features based on user suggestions.",
    image: img4,
  },
  {
    id: 5,
    title: "About Us",
    description: "Learn more about our mission, the team behind the platform, and our goals for enhancing user experience.",
    image: img5,
  },
  {
    id: 6,
    title: "Search",
    description: "Quickly find specific images or content through an intuitive search feature.",
    image: img6,
  },
  {
    id: 7,
    title: "Image Generator",
    description: "Generate unique and creative images based on user inputs.",
    image: img7,
  },
  {
    id: 8,
    title: "Community Sharing",
    description: "Share your generated images with the community, explore others' creations, and get inspired.",
    image: img8,
  },
];

const Features = () => {
  const featureRefs = useRef([]);

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

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <Navbar />
    <div className="features-container">
      <h2 className="features-txt reveal">Features</h2>
      {featuresData.map((feature, index) => (
        <div
          key={feature.id}
          ref={(el) => (featureRefs.current[index] = el)}
          className={`feature ${index % 2 === 0 ? "feature-row-reverse" : ""}`}
        >
          <div className="feature-image">
            <img src={feature.image} alt={feature.title} />
          </div>
          <div className="feature-info">
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
            <div className="generate">
              <input type="text" />
              <button className="generateBtn"> ✨Generate</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Features;

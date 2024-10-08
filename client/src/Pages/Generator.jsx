import React, { useState } from 'react';
import "./Generator.css";
import Logo from '../assets/logo.png';
import Heart from '../assets/saved.png';
import { BsShareFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { RiDownload2Fill } from "react-icons/ri";


// const staticImageUrl = "https://static.vecteezy.com/system/resources/thumbnails/024/179/673/small_2x/pure-blue-sky-white-clouds-the-strong-light-through-the-clouds-shines-straight-on-the-endless-sea-of-white-tulip-flowers-ai-generative-photo.jpg";

function Generator() {
  const [prompt, setPrompt] = useState('');
  const [generatedImages, setGeneratedImages] = useState([]);  
  const [loading, setLoading] = useState(false); 

  const handleSearch = () => {
    setLoading(true);

    const form = new FormData();
    form.append('prompt', prompt);

    fetch('https://clipdrop-api.co/text-to-image/v1', {
      method: 'POST',
      headers: {
        'x-api-key': 'debc763737bb4bda58b1708f8cbba5f976890a8963a22a6004d715911b8182432fc2283dc749813e6cc6e67641e7cfd3',
      },
      body: form,
    })
      .then(response => response.blob())
      .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        setGeneratedImages(prevImages => [...prevImages, imageUrl]);  
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false); 
      });
  };
  

  const handleDownload = (imageUrl) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `GeneratedImage_${new Date().getTime()}.png`; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = (imageUrl) => {
    fetch(imageUrl)
      .then(res => res.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = function () {
          const base64data = reader.result;
          if (navigator.share) {
            navigator.share({
              title: 'Check out this image!',
              text: 'I generated this image using PICBOT!',
              files: [
                new File([blob], `GeneratedImage_${new Date().getTime()}.png`, { type: blob.type })
              ]
            }).then(() => {
              console.log('Image shared successfully!');
            }).catch((error) => {
              console.error('Error sharing:', error);
            });
          } else {
            alert('Web Share API is not supported in your browser.');
          }
        }
        reader.readAsDataURL(blob);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <img src={Logo} alt="PICBOT" />
        </div>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Enter your prompt" 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
        <div className="heart-icon">
          <span><img src={Heart} alt="Saved"/></span>
        </div>
      </nav>

      <div className='display'>
        {loading && <p>Loading...</p>}  
        {generatedImages.map((image, index) => (
          <div className="image-container" key={index}>
            <img width={400} src={image} alt={`Generated ${index + 1}`} />
            <div className="overlay">
              { <RiDownload2Fill 
                className="iconss" 
                onClick={() => handleDownload(image)}
              /> }
              <BsShareFill 
                 className='iconss'
                  onClick={() => handleShare(image)} 
              />
              { <CiHeart className="iconss"/> }
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Generator;

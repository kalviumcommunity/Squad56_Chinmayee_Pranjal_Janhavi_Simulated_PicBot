import React, { useState } from 'react';
import "./Generator.css";
import Logo from '../assets/logo.png';
import Heart from '../assets/saved.png';
import { BsShareFill } from "react-icons/bs";
// import { CiHeart } from "react-icons/ci";
// import { RiDownload2Fill } from "react-icons/ri";

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
        'x-api-key': '9ae2cc39335864e2a81298dc9bfa6ec23be6a022e559e7f37210344897eb5c021ec1f6eb96af826e087e7de7e7aea471',
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
              {/* <RiDownload2Fill 
                className="icon" 
                onClick={() => handleDownload(image)}
              /> */}
              <BsShareFill 
                className="icon" 
                onClick={() => handleShare(image)}
              />
              {/* <CiHeart className="icon"/>  */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Generator;

import { useState } from 'react';
import "./Generator.css";
import Logo from '../assets/logo.png';
import Heart from '../assets/saved.png';
import { BsShareFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { RiDownload2Fill } from "react-icons/ri";
import { NavLink } from 'react-router-dom'
function Generator() {
  const [prompt, setPrompt] = useState('');
  const [generatedImages, setGeneratedImages] = useState([]);  
  const [loading, setLoading] = useState(false);  

  const handleSearch = async () => {
    if (!prompt.trim()) {
      alert("Please enter a valid prompt.");
      return;
    }

    setLoading(true);

    const form = new FormData();
    form.append('prompt', prompt);

    try {
      const response = await fetch('https://clipdrop-api.co/text-to-image/v1', {
        method: 'POST',
        headers: {
          'x-api-key': 'e69b2b9c6c1cdded9d4b33c069ac974e4dfaa5e8b06a724989f04995902caab74932b3aeef10701febb6ea2c999ae9d5'
        },
        body: form,
      });

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: 'image/png' });
      const imageUrl = URL.createObjectURL(blob);

      setGeneratedImages(prevImages => [...prevImages, imageUrl]);  
    } catch (error) {
      console.error('Error:', error);
      alert("Failed to generate image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (imageUrl) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `GeneratedImage_${new Date().getTime()}.png`; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const file = new File([blob], `GeneratedImage_${new Date().getTime()}.png`, { type: 'image/png' });

      if (navigator.share) {
        await navigator.share({
          title: 'Check out this AI-generated image!',
          text: 'I created this image using PICBOT!',
          files: [file]
        });
        console.log('Image shared successfully!');
      } else {
        alert('Web Share API is not supported in your browser.');
      }
    } catch (error) {
      console.error('Error sharing image:', error);
    }
  };

  return (
    <>
      <nav className="nav">
        <div className="logo">
         <NavLink to="/"><img src={Logo} alt="PICBOT" /></NavLink> 
        </div>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Enter your prompt" 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch} disabled={loading}>
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
        <div className="heart-icon">
          <span><img src={Heart} alt="Saved Images" /></span>
        </div>
      </nav>

      <div className='display'>
        {loading && <p>Generating image...</p>}  
        {generatedImages.map((image, index) => (
          <div className="image-container" key={index}>
            <img width={400} src={image} alt={`Generated ${index + 1}`} />
            <div className="overlay">
              <RiDownload2Fill 
                className="iconss" 
                onClick={() => handleDownload(image)}
              />
              <BsShareFill 
                className='iconss'
                onClick={() => handleShare(image)} 
              />
              <CiHeart className="iconss" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Generator;

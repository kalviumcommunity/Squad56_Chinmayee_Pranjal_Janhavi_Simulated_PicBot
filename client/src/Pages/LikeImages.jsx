import React from 'react';

function LikeImages({ likedImages }) {
  return (
    <div className='liked-images'>
      <h2>Liked Images</h2>
      <div className="liked-image-gallery">
        {likedImages.length === 0 ? (
          <p>No liked images yet.</p>
        ) : (
          likedImages.map((image, index) => (
            <img key={index} src={image} alt={`Liked ${index + 1}`} width={200} />
          ))
        )}
      </div>
    </div>
  );
}

export default LikeImages;

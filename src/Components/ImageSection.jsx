import React from "react";
import "../Styles/ImageSection.css";

const ImageSection = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Image Gallery</h2>
      <div className="image-gallery">
        <img src="https://via.placeholder.com/300" alt="Gallery Image 1" className="gallery-image" />
        <img src="https://via.placeholder.com/300" alt="Gallery Image 2" className="gallery-image" />
        <img src="https://via.placeholder.com/300" alt="Gallery Image 3" className="gallery-image" />
        <img src="https://via.placeholder.com/300" alt="Gallery Image 4" className="gallery-image" />
        <img src="https://via.placeholder.com/300" alt="Gallery Image 5" className="gallery-image" />
        <img src="https://via.placeholder.com/300" alt="Gallery Image 6" className="gallery-image" />
        <img src="https://via.placeholder.com/300" alt="Gallery Image 7" className="gallery-image" />
        <img src="https://via.placeholder.com/300" alt="Gallery Image 8" className="gallery-image" />
      </div>
    </div>
  );
};

export default ImageSection;
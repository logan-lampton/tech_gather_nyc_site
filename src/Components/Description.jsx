import React from 'react';
import "../Styles/Description.css";

const Description = ({ title, intro, details }) => {
  return (
    <div className="description-container">
      <h1 className="heading">{title}</h1>

      <p className="intro">{intro}</p>

      <p className="details">{details}</p>
    </div>
  );
}

export default Description;
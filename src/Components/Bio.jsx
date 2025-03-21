import React from 'react'
import "../Styles/Bio.css";

function Bio({ name, role, image, bio }) {
  return (
    <div className="bio-card">
      <img src={image} alt={name} className="bio-image" />
      <div className="bio-content">
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default Bio
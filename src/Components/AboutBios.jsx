import React from "react";
import Bio from "../Components/Bio";
import "../Styles/AboutPage.css";

const AboutBios = () => {
  return (
    <div className="team-container">
      <h1>Meet Our Team</h1>
      <div className="team-grid">
        <Bio
          name="Jane Doe"
          role="Software Engineer"
          image="/images/jane.jpg"
          bio="Jane is an experienced front-end developer with a passion for UI/UX design."
        />
        <Bio
          name="John Smith"
          role="Product Manager"
          image="/images/john.jpg"
          bio="John specializes in agile methodologies and has years of experience managing tech teams."
        />
        <Bio
          name="Emily Davis"
          role="UI/UX Designer"
          image="/images/emily.jpg"
          bio="Emily focuses on creating user-friendly designs for digital products."
        />
      </div>
    </div>
  );
};

export default AboutBios;
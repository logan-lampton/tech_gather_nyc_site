import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ImageSection from '../Components/ImageSection';
import Description from '../Components/Description';
import SocialMedia from '../Components/SocialMedia';
import Contact from '../Components/Contact';
import "../Styles/Home.css";

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById(location.hash.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location])

  return (
    <div className="home-container">
      <div className="image-section">
        <ImageSection />
      </div>
      <div className="description">
        <Description
          title="Welcome to Tech Gather"
          intro="Tech Gather NYC is a mixer for anyone and everyone in NYC Tech."
          details="New to Tech? Welcome! 15 years in? Come on down! Just got to the city? Get to know the techies here! Been here forever? Grab your 'Pizza Rat' headband and welcome the newbies."
        />
      </div>
      <div className="social-media">
        <SocialMedia />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}


export default Home
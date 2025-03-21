import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ImageSection from '../Components/ImageSection';
import Description from '../Components/Description';
import SocialMedia from '../Components/SocialMedia';
import Contact from '../Components/Contact';

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById(location.hash.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location])



  return (
    <div>
      <ImageSection />
      <Description />
      <SocialMedia />
      <div id="contact" style={{ marginTop: "500px" }}>
        <Contact />
      </div>
    </div>
  )
}

export default Home
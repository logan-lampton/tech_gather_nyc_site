import React from 'react'
import Navbar from '../Components/Navbar'
import ImageSection from '../Components/ImageSection'
import Contact from '../Components/Contact'
import SocialMedias from '../Components/SocialMedias'
import Description from '../Components/Description'

const Home = () => {
  return (
    <div>
        <>
        <Description/>
        <SocialMedias/>
        </>
        <Contact/>
    </div>
  )
}

export default Home
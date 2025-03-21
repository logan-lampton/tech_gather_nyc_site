import React from 'react'
import Contact from '../Components/Contact'
import SocialMedia from '../Components/SocialMedia'
import Description from '../Components/Description'

const Home = () => {
  return (
    <div>
      <>
        <Description />
        <SocialMedia />
      </>
      <Contact />
    </div>
  )
}

export default Home
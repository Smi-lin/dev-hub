import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import Service from './Service'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
      <Service/>
    </div>
  )
}

export default Home

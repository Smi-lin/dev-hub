import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import Service from './Service'
import MyProject from './MyProject'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
      <Service/>
      <MyProject/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home

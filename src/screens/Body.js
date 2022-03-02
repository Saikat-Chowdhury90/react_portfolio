import React from 'react'
import HomeScreen from './HomeScreen'
import Footer from '../components/Footer'
import '../styles/Body.css'
import Navbar from '../components/Navbar'
import About from '../components/About'
import SkillScreen from './SkillScreen'
import ContactScreen from './ContactScreen'
import ReelsScreen from './ReelsScreen'
export default function Body() {
 
  return (
    <div  className='home-container'>
        <Navbar/>
        <ReelsScreen/>
        <HomeScreen/>
        <Footer/>
        <About/>
        
        <SkillScreen/>
        <Footer/>
        <ContactScreen/>
    </div>
  )
}

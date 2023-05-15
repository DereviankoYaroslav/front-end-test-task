import React from 'react'
import Header from './Header'
import FirstScreenContent from './FirstScreenContent'
import firtsImg from '../images/first-screen-image.svg'
import Info from './Info'
import Benefits from './Benefits'
import Quote from './Quote'
import Video from './Video'
import PromicesSection from './PromicesSection'
import Reviews from './Reviews'
import Contact from './Contact'
import Footer from './Footer'

const LightTheme = () => {
  return (
    <div>
        <Header />
        <img className='first-screen-image' src={firtsImg} alt='firts_screen_image'></img>
        <div className='gradient-for-first-screen'></div>
        <FirstScreenContent/>
        <Info />
        <Benefits />
        <Quote />
        <Video />
        <PromicesSection />
        <Reviews />
        <Contact />
        <Footer />
    </div>
  )
}

export default LightTheme
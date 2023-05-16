import React, { useContext } from 'react'
import Header from './Header'
import FirstScreenContent from './FirstScreenContent'
import light from '../images/light.svg'
import dark from '../images/dark.svg'
import Info from './Info'
import Benefits from './Benefits'
import Quote from './Quote'
import Video from './Video'
import PromicesSection from './PromicesSection'
import Reviews from './Reviews'
import Contact from './Contact'
import Footer from './Footer'
import { Context } from '../contexts/context'

const MainContent = () => {

  const theme = useContext(Context);
  let firstImg = light;

  if (theme === 'dark'){
    firstImg = dark;
  }

  return (
    <div>
        <Header />
        <img className={`first-screen-image`} src={firstImg} alt='firts_screen_image'></img>
        <div className={`gradient-for-first-screen-${theme}`}></div>
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

export default MainContent
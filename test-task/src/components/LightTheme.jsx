import React from 'react'
import Header from './Header'
import FirstScreenContent from './FirstScreenContent'
import firtsImg from '../images/first-screen-image.svg'
import Info from './Info'
import Benefits from './Benefits'
import Quote from './Quote'

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
    </div>
  )
}

export default LightTheme
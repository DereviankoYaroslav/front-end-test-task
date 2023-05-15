import React from 'react'
import vector from '../images/vector.svg'

const Quote = () => {
  return (
    <div className='section-quote'>
        <div className='quote-text'>
            <img className='quote-mark' src={vector} alt='quote-mark'></img>
            <div className='quote-text-inner'>
                <p className='quote-main-text'>Solis Group serves as a liquidity nexus that gives stablecoin issuers, holders and exchanges certainty over access and liquidity</p>
                <p className='quote-desc'>Lennon Burnett, Solis Group CEO</p>
            </div>
        </div>
    </div>
  )
}

export default Quote
import React from 'react'
import statisticImage from '../images/statistic-image.svg'

const Info = () => {
  return (
    <div>
        <div className='section-info'>
            <img src={statisticImage} alt='statistic'></img>
        </div>
        <div className='statistic-background'>
            <div className='info-list'>
                <div className='list-item'>
                    <p className='main-text'>$1 tril</p>
                    <p className='secondary-text'>Market cap potential</p>
                </div>
                <div className='divider'></div>
                <div className='list-item'>
                    <p className='main-text'>$3.65 mil</p>
                    <p className='secondary-text'>Deposited to platform</p>
                </div>
                <div className='divider'></div>
                <div className='list-item'>
                    <p className='main-text'>12</p>
                    <p className='secondary-text'>Stablecoins</p>
                </div>
            </div>
            <div className='info-text'>
                <div className='inner-text'>
                <p>Solis group is a new venture created with investments from and collaboration with XBTO International, XBTO Ventures and Phil Potter, formerly of bitfinex. Stablehouse is intended to launch a first-of-its-kind clearing house for stablecoins that seeks to promote the next phase of the market’s development.</p>
                <p></p>
                <p></p>
                <p>The API-enabled, centralized platform addresses the key issues of inconsistent liquidity, stability and accessibility which are currently preventing the stablecoin market from reaching critical mass. </p>
                </div>
                <button className='contact-button'>CONTACT SALES</button>
                <p className='contact-button-bg'></p>
            </div>
        </div>
    </div>
  )
}

export default Info
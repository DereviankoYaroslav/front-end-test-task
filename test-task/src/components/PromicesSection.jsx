import React from 'react'

import featuresBackground from '../images/features-background-image.svg'

const PromicesSection = () => {
  return (
    <div className='promices-section'>
        <div className='features-background-image'>
            <img src={featuresBackground} alt='statistic'></img>
        </div>
        <div className='features-background'>
            <div className='promises-list'>
                <div className='promices-row'>
                    <div className='item-promices-1'>
                        <p className='promices-main-text'>On-Exchange Trading</p>
                        <p className='promices-desc'>Instant Passive Inventory earns fees</p>
                    </div>
                    <div className='item-promices-2'>
                        <p className='promices-main-text'>On-Chain Swaps</p>
                        <p className='promices-desc'>Low Counterparty risk Direct transfers</p>
                    </div>
                </div>
                <div className='promices-row'>
                    <div className='item-promices-1'>
                        <p className='promices-main-text'>Time Settlement Swaps</p>
                        <p className='promices-desc'>LBTC / Lightning and other sidechain swaps</p>
                    </div>
                    <div className='item-promices-2'>
                        <button className='button-big'>JOIN NOW</button>
                        <p className='big-button-bg'></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PromicesSection
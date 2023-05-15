import React from 'react'

const Benefits = () => {
  return (
    <div className='benefits'>
        <div className='divider-row'>
            <div>
                <div className='divider-benefits-1'></div>
            </div>
            <div>
                <div className='divider-benefits-2'></div>
            </div>
        </div>
        <div className='benefits-row'>
            <div className='item-benefits-1'>
                <p className='benefits-main-text'>Qualified traders and liquidty solutions</p>
                <p className='benefits-desc'>Trade easily and efficiently between 12 stablecoins, including USDT, TrueUSD, Dai, Eurs and Gemini Dollar.</p>
            </div>
            <div className='item-benefits-2'>
                <p className='benefits-main-text'>Settlement/OTC API and integration</p>
                <p className='benefits-desc'>Integrate OTC operations and settlements using our efficient API.</p>
            </div>
        </div>
        <div className='divider-row'>
            <div className='divider-benefits-1'></div>
            <div className='divider-benefits-2'></div>
        </div>
        <div className='benefits-row'>
            <div className='item-benefits-1'>
                <p className='benefits-main-text'>The best payments solutions </p>
                <p className='benefits-desc'>For all stablecoin payments, from point-of-sale transactions to website solutions. If you use stablecoins in your business, Stablehouse is for you.</p>
            </div>
            <div className='item-benefits-2'>
                <p className='benefits-main-text'>Treasury and returns for stablecoin stores</p>
                <p className='benefits-desc'>Automate your stablecoin store with instant payments and on-the-fly conversion between different stablecoins.</p>
            </div>
        </div>
    </div>
  )
}

export default Benefits
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-row'>
            <div className='item-footer'>
                <p className='footer-text'>© 2023 Solisgroup. All Rights Reserved.</p>
            </div>
            <div className='item-footer'>
                <p className='footer-text'>made by Yaroslav Derevianko</p>
            </div>
            <div className='item-footer'>
                <Link className='footer-text-2'>User Agreement</Link>
                <Link className='footer-text-2'>Privacy Policy</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer
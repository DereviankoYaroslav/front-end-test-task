import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-row'>
            <div className='logo'>
                <img src={logo}></img>
            </div>
            <div className='item-header'>
                <Link className='header-text'>Home</Link>
                <Link className='header-text'>About</Link>
                <Link className='header-text'>Products</Link>
                <Link className='header-text'>Use Cases</Link>
                <Link className='header-text'>Pricing</Link>
                <Link className='header-text'>Resources</Link>
            </div>
        </div>
    </div>
  )
}

export default Header
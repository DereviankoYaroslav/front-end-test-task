import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import styles from '../modules/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.headerRow}>
            <div className={styles.logo}>
                <img src={logo} alt='logo'></img>
            </div>
            <div className={styles.itemHeader}>
                <Link className={styles.headerText}>Home</Link>
                <Link className={styles.headerText}>About</Link>
                <Link className={styles.headerText}>Products</Link>
                <Link className={styles.headerText}>Use Cases</Link>
                <Link className={styles.headerText}>Pricing</Link>
                <Link className={styles.headerText}>Resources</Link>
            </div>
        </div>
    </div>
  )
}

export default Header
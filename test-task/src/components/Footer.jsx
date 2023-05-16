import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../modules/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerRow}>
            <div className={styles.itemFooter}>
                <p className={styles.footerText}>© 2023 Solisgroup. All Rights Reserved.</p>
            </div>
            <div className={styles.itemFooter}>
                <p className={styles.footerText}>made by Yaroslav Derevianko</p>
            </div>
            <div className={styles.itemFooter}>
                <Link className={styles.footerText2}>User Agreement</Link>
                <Link className={styles.footerText2}>Privacy Policy</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer
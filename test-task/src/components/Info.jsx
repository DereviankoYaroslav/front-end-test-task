import React from 'react'
import statisticImage from '../images/statistic-image.svg'
import styles from '../modules/Info.module.css'

const Info = () => {
  return (
    <div>
        <div className={styles.sectionInfo}>
            <img src={statisticImage} alt='statistic'></img>
        </div>
        <div className={styles.statisticBackground}>
            <div className={styles.infoList}>
                <div className={styles.listItem}>
                    <p className={styles.mainText}>$1 tril</p>
                    <p className={styles.secondaryText}>Market cap potential</p>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.listItem}>
                    <p className={styles.mainText}>$3.65 mil</p>
                    <p className={styles.secondaryText}>Deposited to platform</p>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.listItem}>
                    <p className={styles.mainText}>12</p>
                    <p className={styles.secondaryText}>Stablecoins</p>
                </div>
            </div>
            <div className={styles.infoText}>
                <div className={styles.innerText}>
                <p>Solis group is a new venture created with investments from and collaboration with XBTO International, XBTO Ventures and Phil Potter, formerly of bitfinex. Stablehouse is intended to launch a first-of-its-kind clearing house for stablecoins that seeks to promote the next phase of the market’s development.</p>
                <p></p>
                <p></p>
                <p>The API-enabled, centralized platform addresses the key issues of inconsistent liquidity, stability and accessibility which are currently preventing the stablecoin market from reaching critical mass. </p>
                </div>
                <button className={styles.contactButton}>CONTACT SALES</button>
                <p className={styles.contactButtonBg}></p>
            </div>
        </div>
    </div>
  )
}

export default Info
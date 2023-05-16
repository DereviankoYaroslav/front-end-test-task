import React from 'react'
import featuresBackground from '../images/features-background-image.svg'
import styles from '../modules/PromicesSection.module.css'

const PromicesSection = () => {
  return (
    <div className={styles.promicesSection}>
        <div className={styles.featuresBackgroundImage}>
            <img src={featuresBackground} alt='statistic'></img>
        </div>
        <div className={styles.featuresBackground}>
            <div className={styles.promisesList}>
                <div className={styles.promicesRow}>
                    <div className={styles.itemPromices}>
                        <p className={styles.promicesMainText}>On-Exchange Trading</p>
                        <p className={styles.promicesDesc}>Instant Passive Inventory earns fees</p>
                    </div>
                    <div className={styles.itemPromices}>
                        <p className={styles.promicesMainText}>On-Chain Swaps</p>
                        <p className={styles.promicesDesc}>Low Counterparty risk Direct transfers</p>
                    </div>
                </div>
                <div className={styles.promicesRow}>
                    <div className={styles.itemPromices}>
                        <p className={styles.promicesMainText}>Time Settlement Swaps</p>
                        <p className={styles.promicesDesc}>LBTC / Lightning and other sidechain swaps</p>
                    </div>
                    <div className={styles.itemPromices}>
                        <button className={styles.buttonBig}>JOIN NOW</button>
                        <p className={styles.bigButtonBg}></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PromicesSection
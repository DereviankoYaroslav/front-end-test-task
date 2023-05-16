import React from 'react'
import styles from '../modules/Benefits.module.css'

const Benefits = () => {
  return (
    <div className={styles.benefits}>
        <div className={styles.dividerRow}>
            <div>
                <div className={styles.dividerBenefits}></div>
            </div>
            <div>
                <div className={styles.dividerBenefits}></div>
            </div>
        </div>
        <div className={styles.benefitsRow}>
            <div className={styles.itemBenefits}>
                <p className={styles.benefitsMainText}>Qualified traders and liquidty solutions</p>
                <p className={styles.benefitsDesc}>Trade easily and efficiently between 12 stablecoins, including USDT, TrueUSD, Dai, Eurs and Gemini Dollar.</p>
            </div>
            <div className={styles.itemBenefits}>
                <p className={styles.benefitsMainText}>Settlement/OTC API and integration</p>
                <p className={styles.benefitsDesc}>Integrate OTC operations and settlements using our efficient API.</p>
            </div>
        </div>
        <div className={styles.dividerRow}>
            <div className={styles.dividerBenefits}></div>
            <div className={styles.dividerBenefits}></div>
        </div>
        <div className={styles.benefitsRow}>
            <div className={styles.itemBenefits}>
                <p className={styles.benefitsMainText}>The best payments solutions </p>
                <p className={styles.benefitsDesc}>For all stablecoin payments, from point-of-sale transactions to website solutions. If you use stablecoins in your business, Stablehouse is for you.</p>
            </div>
            <div className={styles.itemBenefits}>
                <p className={styles.benefitsMainText}>Treasury and returns for stablecoin stores</p>
                <p className={styles.benefitsDesc}>Automate your stablecoin store with instant payments and on-the-fly conversion between different stablecoins.</p>
            </div>
        </div>
    </div>
  )
}

export default Benefits
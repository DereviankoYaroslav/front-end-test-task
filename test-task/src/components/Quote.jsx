import React from 'react'
import vector from '../images/vector.svg'
import styles from '../modules/Quote.module.css'

const Quote = () => {
  return (
    <div className={styles.sectionQuote}>
        <div className={styles.quoteText}>
            <img className={styles.quoteMark} src={vector} alt='quote-mark'></img>
            <div className={styles.quoteTextInner}>
                <p className={styles.quoteMainText}>Solis Group serves as a liquidity nexus that gives stablecoin issuers, holders and exchanges certainty over access and liquidity</p>
                <p className={styles.quoteDesc}>Lennon Burnett, Solis Group CEO</p>
            </div>
        </div>
    </div>
  )
}

export default Quote
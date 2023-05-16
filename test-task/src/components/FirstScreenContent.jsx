import React from 'react'
import styles from '../modules/FirstScreenContent.module.css'

const FirstScreenContent = () => {
  return (
    <div className={styles.firstScreenContent}>
        <h1 className={styles.textOne}>A peer-to-peer stablecoin clearinghouse for the new economy</h1>
        <p className={styles.textTwo}>We are bringing real solutions to the payments world by leveraging public blockchains.</p>
        <button className={styles.joinButton}>JOIN NOW</button>
        <p className={styles.buttonBg}></p>
    </div>
  )
}

export default FirstScreenContent
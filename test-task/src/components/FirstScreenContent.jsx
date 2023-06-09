import React, { useContext } from 'react'
import styles from '../modules/FirstScreenContent.module.css'
import { Context } from '../contexts/context';

const FirstScreenContent = () => {

  const theme = useContext(Context);

  return (
    <div className={styles.firstScreenContent}>
        <h1 className={styles.textOne}>A peer-to-peer stablecoin <span className='different-text'>clearinghouse</span> for the new economy</h1>
        <p className={styles.textTwo}>We are bringing real solutions to the payments world by leveraging public blockchains.</p>
        <button className={styles.joinButton}>JOIN NOW</button>
        <p className={styles.buttonBg}></p>
    </div>
  )
}

export default FirstScreenContent
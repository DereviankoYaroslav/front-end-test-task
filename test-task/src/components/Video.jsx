import React from 'react'
import ReactPlayer from 'react-player'
import styles from '../modules/Video.module.css'

const Video = () => {
  return (
    <div>
        <div className={styles.screensaverVideo}>
            <ReactPlayer width={'850px'} height={'539px'} url='https://youtu.be/vnbN9V_2Guk'/>
        </div>
    <div className={styles.videoSection}>
        <div className={styles.screensaverForVideo}>
            <div className={styles.tablet}>
                <div className={styles.rect}>
                    <div className={styles.eclipse1}></div>
                    <div className={styles.eclipse2}></div>
                </div>
            </div>
        </div>
        <p className={styles.videoMainText}>A powerful API , easy to use user interface</p>
            <p className={styles.videoDec}>Our API allows all members to interact with Stablehouse’s platform, from effecting transfers to deposits, withdrawals, creation and redemption and reporting.</p>
    </div>
    </div>
  )
}

export default Video
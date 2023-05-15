import React from 'react'
import ReactPlayer from 'react-player'

const Video = () => {
  return (
    <div>
        <div className='screensaver-video'>
            <ReactPlayer width={'850px'} height={'539px'} url='https://youtu.be/vnbN9V_2Guk'/>
        </div>
    <div className='video-section'>
        <div className='screensaver-for-video'>
            <div className='tablet'>
                <div className='rect'>
                    <div className='screensaver-video'></div>
                    <div className='eclipse-1'></div>
                    <div className='eclipse-2'></div>
                </div>
            </div>
        </div>
        <p className='video-main-text'>A powerful API , easy to use user interface</p>
        <p className='video-decs'>Our API allows all members to interact with Stablehouse’s platform, from effecting transfers to deposits, withdrawals, creation and redemption and reporting.</p>
    </div>
    </div>
  )
}

export default Video
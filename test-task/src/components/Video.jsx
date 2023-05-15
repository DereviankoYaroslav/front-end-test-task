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
        <p></p>
    </div>
    </div>
  )
}

export default Video
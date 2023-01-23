import React from 'react'
import BGVideo from '../Videos/Test_4.mp4'

const Video = () => {
    return(
        <div className = 'video' >
        <video src={BGVideo} autoPlay loop muted/>
        <div className='content'>

        </div>
        </div>
    )
}

export default Video
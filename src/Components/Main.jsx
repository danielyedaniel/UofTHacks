import React from 'react'
import BGVideo from '../Videos/Test_4.mp4'

const Main = () => {
    return(
        <div className = 'main'>
        <video src={BGVideo} autoPlay loop muted/>
        <div className='content'>

        </div>
        </div>
    )
}

export default Main
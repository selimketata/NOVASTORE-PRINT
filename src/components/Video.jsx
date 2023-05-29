import React from "react";
import NovaStore from '../assets/NovaStore.mp4'
const Video =()=>{
    return (
        <div className="vid">
            <video src={NovaStore} type="video/mp4" autoPlay loop muted></video>
            
        </div>
    )
}

export default  Video
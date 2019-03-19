import './videoItem.css'
import React from 'react';

const VideoItems = ({video,onVideoSelect}) => {
    return ( 
       
        <div onClick={()=>{onVideoSelect(video)}} className="video-Item item" >
            <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header"> {video.snippet.title} </div>
             </div>
        </div>
     );
}
 
export default VideoItems;
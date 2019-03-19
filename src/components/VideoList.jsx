import React from 'react';
import VideoItems from './VideoItem';

const VideoList = ({videos, onVideoSelect})=>{

    let renderedList = videos.map((video)=>{

        return <VideoItems key={video.id.videoId} onVideoSelect={onVideoSelect} video = { video} />;

    })

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
       
    );
}
 
export default VideoList;
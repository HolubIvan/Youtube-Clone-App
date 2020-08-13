import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect})=>{

    return(
    <div className='ui relaxed divided list'>
        {
            videos.map(elem => <VideoItem key={elem.id.videoId} video={elem} onVideoSelect={onVideoSelect}/>)
        }
    </div>
    );
}


export default VideoList;
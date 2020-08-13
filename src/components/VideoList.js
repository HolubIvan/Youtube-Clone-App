import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos})=>{

    return(
    <div className='ui relaxed divided list'>
        {
            videos.map(elem => <VideoItem video={elem} />)
        }
    </div>
    );
}


export default VideoList;
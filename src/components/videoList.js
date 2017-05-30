import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem
            onVideoSelect={props.onVideoSelect} // after getting the function passed from the app component,
                                                // we pass the onVideoSelect function to each video item
            key={video.etag}
            video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;//

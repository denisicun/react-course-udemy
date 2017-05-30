import React from 'react';

const VideoDetail = ({video}) => {

  // since the react tries to render the page before the youtube api finshes the loading of gthe videos,
  // we get an undefined object when we first render this component, so we check if we have anything here,
  // and if not, we return a loading div
  if(!video){
    return <div>Loading...</div>;
  };

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
      	<div>{video.snippet.title}</div>
      	<div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;

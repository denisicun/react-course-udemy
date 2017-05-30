import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { // same as (props) but it saves line 5
  // get the current video propety from video list
  //const video = props.video;

  const imageURL = video.snippet.thumbnails.default.url;
  // on the actual click event, we send back the callback we gor from the list component, that will influens the app component
  return (
      <li onClick={() => onVideoSelect(video)} className="list-group-item"> 
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageURL} />
          </div>
          <div className="media-body">
            <div className="media-heading">
              {video.snippet.title}
            </div>
          </div>
        </div>
      </li>
  );
};

export default VideoListItem;

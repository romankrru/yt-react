import React from 'react';
import VideoListItem from './VideoListItem';
import Octicon from 'react-octicon'

export default function ({ video }) {
  if (!video) {
    return <Octicon mega spin name="sync" />;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
      </div>
      <p>
        <span className='font-weight-bold'>Description: </span>
        {video.snippet.description}
      </p>
    </div>
  )
}
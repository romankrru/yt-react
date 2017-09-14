import React from 'react';

export default ({ video, onVideoSelect }) => {
  return (
    <li className='media' onClick={(e) => {onVideoSelect(video)}}>
      <img className="d-flex mr-3 align-self-center" src={video.snippet.thumbnails.default.url} alt="" />
      <div className="media-body">
        <p className="mt-0 mb-1">{video.snippet.title}</p>
      </div>
    </li>
  )
}
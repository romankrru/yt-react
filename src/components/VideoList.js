import React from 'react';
import VideoListItem from './VideoListItem';
import '../styles/VideoList.css'

export default function(props) {
  // console.log(props)

  if (!props.videos) {
    return;
  }

  const items = props.videos.map((video) => {
    // Передать коллбэк onVideoSelect в VideoListItem 
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    )
  })

  return (
    <ul
      className='VideoList list-unstyled'
    >
      {items}
    </ul>
  )
}
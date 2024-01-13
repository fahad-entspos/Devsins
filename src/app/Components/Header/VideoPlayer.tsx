// components/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ videoSrc } : any) => {
  return (
    <div className="w-full mb-4">
      <video controls className="w-full">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

import React from 'react';

const videoPage = ({ videoURL }) => {
  return (
    <video controls>
      <source src={videoURL} type="video/mp4" />
    </video>
  );
};

export default videoPage;

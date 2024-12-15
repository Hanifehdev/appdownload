'use client';

import React from 'react';

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const Player = () => {
  return (
    <ReactPlayer
      url="/videos/ios/streisand.mp4"
      controls
      width="100%"
      height="100%"
    />
  );
};

export default Player;

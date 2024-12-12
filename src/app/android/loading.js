import React from 'react';
import { SyncLoader } from 'react-spinners';

const Loading = () => {
  console.log('loading...');
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <SyncLoader color="#ffff" />
    </div>
  );
};

export default Loading;

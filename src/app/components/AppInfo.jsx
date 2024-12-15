import React from 'react';
import Image from 'next/image';

import { fetchData } from '../utils/fetchData';

const AppInfo = ({ imageURL, imageAlt, Name, RequireVersion }) => {
  const data = fetchData('android');
  return (
    <div className="flex items-center justify-between" dir="ltr">
      <div className="flex flex-col w-full items-start justify-between">
        <div className="font-bold text-2xl">{Name}</div>
        <div className="font-light text-slate-300">{RequireVersion}</div>
      </div>
      <div className="rounded overflow-clip">
        <Image
          alt={imageAlt}
          width={64}
          height={64}
          quality={100}
          src={imageURL}
        />
      </div>
    </div>
  );
};

export default AppInfo;

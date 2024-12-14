import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import toLowerCase from '../utils/toLowerCase';

import BackBtn from './BackBtn';

const AppList = ({ data, platform }) => {
  const apps = data;
  return (
    <div className="grid grid-cols-12 gap-4 mt-8">
      {apps.map((app) => (
        <div key={app.id} className="lg:col-start-5 lg:col-end-9 col-span-12">
          <Link href={`/apps/${platform}/${toLowerCase(app.appName)}`}>
            <div className="homeBox">
              <div className="flex items-center justify-between w-full p-4">
                <div className="overflow-clip rounded">
                  <Image
                    alt={app.appName}
                    width={48}
                    height={48}
                    quality={100}
                    src={app.imageURL}
                  />
                </div>
                <p className="text-slate-200">{app.appName}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
      <BackBtn path="/" />
    </div>
  );
};

export default AppList;

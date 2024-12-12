import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import AppName from '../components/AppName';
const Page = async () => {
  const data = await fetch('http://localhost:3001/android');
  const apps = await data.json();
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <AppName AppName={'ویندوز'} />
      <div className="grid grid-cols-12 gap-4 mt-8">
        {apps.map((app) => (
          <div key={app.id} className="lg:col-start-5 lg:col-end-9 col-span-12">
            <a href={app.downloadLink}>
              <div className="homeBox">
                <div className="flex items-center justify-between w-full p-4">
                  <div className="overflow-clip rounded">
                    <Image
                      alt={app.appName}
                      width={48}
                      height={48}
                      src={app.imageURL}
                    />
                  </div>
                  <p className="text-slate-200">{app.appName}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
        <div className="lg:col-start-5 lg:col-end-9 col-span-12">
          <Link href="/">
            <div className="back">بازگشت</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;

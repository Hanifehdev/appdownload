import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import BackBtn from '@/app/components/BackBtn';
import AppName from '@/app/components/AppName';

const Page = async () => {
  const data = await fetch(`${process.env.API_URL}/android`);
  const apps = await data.json();

  const toLowerCase = (word) => {
    return word.toLowerCase().replace(/\s+/g, '');
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <AppName AppName={'اندروید'} />
      <div className="grid grid-cols-12 gap-4 mt-8">
        {apps.map((app) => (
          <div key={app.id} className="lg:col-start-5 lg:col-end-9 col-span-12">
            <Link href={`/apps/android/${toLowerCase(app.appName)}`}>
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
    </div>
  );
};

export default Page;

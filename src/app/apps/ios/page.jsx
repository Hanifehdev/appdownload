import React from 'react';
import BackBtn from '@/app/components/BackBtn';
import Image from 'next/image';
import AppName from '@/app/components/AppName';

const Page = async () => {
  const data = await fetch(`${process.env.API_URL}/android`);
  const apps = await data.json();

  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <AppName AppName={'آی‌او‌اس'} />
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
        <BackBtn path="/" />
      </div>
    </div>
  );
};

export default Page;

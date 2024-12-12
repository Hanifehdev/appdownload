import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import data from '../data.json';

const Page = () => {
  console.log('Loaded data:', data);
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <p className="text-center text-2xl font-semibold text-slate-200 cursor-default">
        نرم افزارهای پیشنهادی آی‌او‌اس
      </p>
      <div className="grid grid-cols-12 gap-4 mt-8">
        {data.ios.map((app) => (
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

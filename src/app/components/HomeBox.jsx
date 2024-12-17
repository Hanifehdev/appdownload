import React from 'react';
import Link from 'next/link';

const HomeBox = () => {
  return (
    <>
      <h2 className="font-bold text-3xl text-center cursor-default">
        دانلود مستقیم نرم‌افزار ها
      </h2>
      <div className="mt-16">
        <p className="text-center text-2xl font-semibold text-slate-200 cursor-default">
          انتخاب سیستم عامل
        </p>
        <div className="grid grid-cols-12 gap-4 mt-8">
          <div className="lg:col-start-5 lg:col-end-9 col-span-12">
            <Link href="/apps/android">
              <div className="homeBox">اندروید</div>
            </Link>
          </div>
          <div className="lg:col-start-5 lg:col-end-9 col-span-12">
            <Link href="/apps/windows">
              <div className="homeBox">ویندوز</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBox;

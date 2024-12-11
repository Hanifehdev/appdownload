import React from 'react';

import Link from 'next/link';

const HomeBox = () => {
  return (
    <div className="mt-16">
      <p className="text-center text-2xl font-semibold text-slate-200 cursor-default">
        انتخاب سیستم عامل
      </p>
      <div className="grid grid-cols-12 gap-4 mt-8">
        <div className="md:col-span-4 col-span-12">
          <Link href="/android">
            <div className="homeBox">اندروید</div>
          </Link>
        </div>
        <div className="md:col-span-4 col-span-12">
          <Link href="/ios">
            <div className="homeBox">آی‌او‌اس</div>
          </Link>
        </div>
        <div className="md:col-span-4 col-span-12">
          <Link href="/windows">
            <div className="homeBox">ویندوز</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBox;

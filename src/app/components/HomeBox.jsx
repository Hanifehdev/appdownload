import React from 'react';

import Link from 'next/link';

const HomeBox = () => {
  return (
    <div className="mt-16">
      <p className="text-center text-2xl font-semibold text-slate-200">
        انتخاب سیستم عامل
      </p>
      <div className="flex flex-col gap-4 mt-8">
        <Link href="/android">
          <div className="homeBox">اندروید</div>
        </Link>
        <Link href="/ios">
          <div className="homeBox">آی‌او‌اس</div>
        </Link>
        <Link href="windows">
          <div className="homeBox">ویندوز</div>
        </Link>
      </div>
    </div>
  );
};

export default HomeBox;

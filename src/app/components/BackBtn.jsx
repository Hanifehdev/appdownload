import React from 'react';
import Link from 'next/link';
const BackBtn = () => {
  return (
    <div className="lg:col-start-5 lg:col-end-9 col-span-12">
      <Link href="/">
        <div className="back">بازگشت</div>
      </Link>
    </div>
  );
};

export default BackBtn;

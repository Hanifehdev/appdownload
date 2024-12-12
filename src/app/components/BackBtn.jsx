import React from 'react';
import Link from 'next/link';
const BackBtn = ({ path }) => {
  return (
    <div className="lg:col-start-5 lg:col-end-9 col-span-12">
      <Link href={path}>
        <div className="back">بازگشت</div>
      </Link>
    </div>
  );
};

export default BackBtn;

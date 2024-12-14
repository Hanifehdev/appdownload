import React from 'react';

import AppName from '@/app/components/AppName';
import AppList from '@/app/components/AppList';
import { fetchData } from '../utils/fetchData';

const Page = async () => {
  const platform = 'ios';
  const apps = await fetchData(platform);

  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <AppName AppName={'آی‌او‌اس'} />
      <AppList platform={platform} data={apps} />
    </div>
  );
};

export default Page;

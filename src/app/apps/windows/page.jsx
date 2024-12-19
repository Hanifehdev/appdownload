import React from 'react';

import AppName from '@/app/components/AppName';
import AppList from '@/app/components/AppList';
import { fetchData } from '@/app/utils/fetchData';

const Page = async () => {
  const platform = 'windows';
  const apps = await fetchData(platform);

  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <AppName AppName={'ویندوز'} />
      <AppList platform={platform} data={apps} />
    </div>
  );
};

export default Page;

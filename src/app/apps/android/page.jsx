import React from 'react';

import AppName from '@/app/components/AppName';
import AppList from '@/app/components/AppList';
import { fetchData } from '../../utils/fetchData';

const Page = async () => {
  const platform = 'android';
  const apps = await fetchData('android');

  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <AppName AppName={'اندروید'} />
      <AppList platform={platform} data={apps} />
    </div>
  );
};

export default Page;

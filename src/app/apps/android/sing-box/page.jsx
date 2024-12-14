import React from 'react';

import AppPage from '@/app/components/AppPage';

import { fetchData } from '@/app/utils/fetchData';
const page = async () => {
  const data = await fetchData('android');
  const thisApp = data[2];

  return (
    <>
      <AppPage application={thisApp} backValue="/apps/android" />
    </>
  );
};

export default page;

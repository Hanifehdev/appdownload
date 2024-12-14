import React from 'react';
import AppPage from '@/app/components/AppPage';

import { fetchData } from '@/app/utils/fetchData';
const page = async () => {
  const data = await fetchData('windows');
  const thisApp = data[0];

  return (
    <>
      <AppPage application={thisApp} backValue="/apps/windows" />
    </>
  );
};

export default page;

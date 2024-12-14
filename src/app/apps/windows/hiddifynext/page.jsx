import React from 'react';
import AppPage from '@/app/components/AppPage';

import { fetchData } from '../../utils/fetchData';
const page = async () => {
  const data = await fetchData('windows');
  const thisApp = data[1];

  return (
    <>
      <AppPage application={thisApp} backValue="/apps/windows" />
    </>
  );
};

export default page;

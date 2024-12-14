import React from 'react';
import AppPage from '@/app/components/AppPage';

import { fetchData } from '../../utils/fetchData';
const page = async () => {
  const data = await fetchData('ios');
  const thisApp = data[1];

  return (
    <>
      <AppPage application={thisApp} backValue="/apps/ios" />
    </>
  );
};

export default page;

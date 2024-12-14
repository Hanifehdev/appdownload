import React from 'react';
import AppPage from '@/app/components/AppPage';

import { fetchData } from '../../utils/fetchData';
const page = async () => {
  const data = await fetchData('android');
  const thisApp = data[1];

  return (
    <>
      <AppPage application={thisApp} backValue="/apps/android" />
    </>
  );
};

export default page;

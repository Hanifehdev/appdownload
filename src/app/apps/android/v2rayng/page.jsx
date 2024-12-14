import React from 'react';

import { fetchData } from '../../utils/fetchData';

import AppPage from '@/app/components/AppPage';
const page = async () => {
  const data = await fetchData('android');
  const thisApp = data[0];

  return (
    <>
      <AppPage application={thisApp} backValue="/apps/android" />
    </>
  );
};

export default page;

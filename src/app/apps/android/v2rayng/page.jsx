import React from 'react';
import BackBtn from '@/app/components/BackBtn';
const page = async () => {

  return (
    <>
      <section className="w-full h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4 mt-8">
            <div className="lg:col-start-5 lg:col-end-9 col-span-12">
              {/* <a href={thisApp.downloadLink}> */}
                <div className="homeBox">دانلود مستقیم</div>
              {/* </a> */}
            </div>
            <div className="lg:col-start-5 lg:col-end-9 col-span-12">
              <div className="homeBox">آموزش ویدئویی</div>
            </div>
            <BackBtn path="/apps/android/" />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

import React from "react";

const Stats = () => {
  return (
    <div>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='grid grid-cols-1 row-gap-8 gap-10 md:grid-cols-4'>
          <div className='text-center'>
            <h6 className='text-3xl font-bold text-deep-purple-accent-400'>
              99.95%
            </h6>
            <p className='font-bold'>Accuracy Rate</p>
            <p className='text-[#67718E]'>in fulfilling orders</p>
          </div>
          <div className='text-center'>
            <h6 className='text-3xl font-bold text-deep-purple-accent-400'>
              5000+
            </h6>
            <p className='font-bold'>Ecommerce businesses</p>
            <p className='text-[#67718E]'>parter with opus</p>
          </div>
          <div className='text-center'>
            <h6 className='text-3xl font-bold text-deep-purple-accent-400'>
              99.96%
            </h6>
            <p className='font-bold'>Of orders ship on time</p>
            <p className='text-[#67718E]'>Within SLA</p>
          </div>
          <div className='text-center'>
            <h6 className='text-3xl font-bold text-deep-purple-accent-400'>
              <span className='text-[#DADDE7]'>#</span>1
            </h6>
            <p className='font-bold'>Best Fullfillment Technology</p>
            <p className='text-[#67718E]'>by AdWeek’s Retail Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

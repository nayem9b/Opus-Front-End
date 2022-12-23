import React from "react";

const WorkWithUs = () => {
  return (
    <div className='bg-[#061237]'>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='flex justify-between'>
          <h1 className='text-4xl text-white font-bold'>
            Ways to work with us
          </h1>
          <button class='w-full px-6 py-3 mt-1 text-sm font-bold tracking-wide text-white transition-none bg-[#1355FF] hover:bg-[#0037c1] sm:mt-0 sm:w-auto sm:flex-shrink-0'>
            Get Started
          </button>
        </div>
        <div className='grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-1'>
          <a
            href='/'
            aria-label='View Item'
            className='inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2'>
            <div className='flex flex-col h-full'>
              <img
                src='https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                className='object-cover w-full h-48'
                alt=''
              />
              <div className='flex-grow border border-t-0 rounded-b'>
                <div className='p-5'>
                  <h6 className='mb-2 font-semibold leading-5'>
                    The doctor said
                  </h6>
                  <p className='text-sm text-gray-900'>
                    Sportacus andrew weatherall goose Refined gentlemen super
                    mario des lynam alpha trion zap rowsdower.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href='/'
            aria-label='View Item'
            className='inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2'>
            <div className='flex flex-col h-full'>
              <img
                src='https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                className='object-cover w-full h-48'
                alt=''
              />
              <div className='flex-grow border border-t-0 rounded-b'>
                <div className='p-5'>
                  <h6 className='mb-2 font-semibold leading-5'>
                    Skate ipsum dolor
                  </h6>
                  <p className='text-sm text-gray-900'>
                    Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href='/'
            aria-label='View Item'
            className='inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2'>
            <div className='flex flex-col h-full'>
              <img
                src='https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                className='object-cover w-full h-48'
                alt=''
              />
              <div className='flex-grow border border-t-0 rounded-b'>
                <div className='p-5'>
                  <h6 className='mb-2 font-semibold leading-5'>
                    They urge you
                  </h6>
                  <p className='text-sm text-gray-900'>
                    A flower in my garden, a mystery in my panties. Heart attack
                    never stopped old Big Bear.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className='text-center'>
          <a
            href='/'
            className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'>
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;

import React from "react";

const WorkWithUs = () => {
  return (
    <div className='bg-[#061237] mt-[162px]'>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='flex justify-between'>
          <h1 className='text-4xl text-white font-bold'>
            Ways to work with us
          </h1>
          <button class='w-full px-6 py-3 mt-1 text-sm font-bold tracking-wide text-white transition-none bg-[#1355FF] hover:bg-[#0037c1] sm:mt-0 sm:w-auto sm:flex-shrink-0'>
            Get Started
          </button>
        </div>
        <div className='grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-1 mx-auto justify-center items-center text-center'>
          <a
            href='/'
            aria-label='View Item'
            className='inline-block overflow-hidden duration-300 transform  rounded shadow-sm hover:-translate-y-2'>
            <div className='flex flex-col h-full'>
              <img
                src='https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                className='object-cover  h-80 w-72'
                alt=''
              />
              <div className=' border-none w-72'>
                <div className=''>
                  <h6 className='mb-2 font-bold text-2xl text-white'>
                    Project Management
                  </h6>
                  <h1 className='text-sm text-[#B6BCCE]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus animi laudantium deserunt est dolorem vitae!
                  </h1>
                </div>
              </div>
            </div>
          </a>
          <a
            href='/'
            aria-label='View Item'
            className='inline-block overflow-hidden duration-300 transform  rounded shadow-sm hover:-translate-y-2'>
            <div className='flex flex-col h-full'>
              <img
                src='https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                className='object-cover  h-80 w-72'
                alt=''
              />
              <div className=' border-none w-72'>
                <div className=''>
                  <h6 className='mb-2 font-bold text-2xl text-white'>
                    Advanced Analytics
                  </h6>
                  <h1 className='text-sm text-[#B6BCCE]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus animi laudantium deserunt est dolorem vitae!
                  </h1>
                </div>
              </div>
            </div>
          </a>
          <a
            href='/'
            aria-label='View Item'
            className='inline-block overflow-hidden duration-300 transform  rounded shadow-sm hover:-translate-y-2'>
            <div className='flex flex-col h-full'>
              <img
                src='https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                className='object-cover  h-80 w-72'
                alt=''
              />
              <div className=' border-none w-72'>
                <div className=''>
                  <h6 className='mb-2 font-bold text-2xl text-white'>
                    Marketing & Dashboard
                  </h6>
                  <h1 className='text-sm text-[#B6BCCE]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus animi laudantium deserunt est dolorem vitae!
                  </h1>
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

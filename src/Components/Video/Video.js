import React from "react";

const Video = () => {
  return (
    <div className='max-w-screen-xl mx-auto mt-52'>
      <div className='flex'>
        <div className='h-16 w-16 bg-[#F7F9FC] absolute'></div>
        <h1 className='text-gray-500 uppercase relative ml-5 mt-5'>
          Video Title
        </h1>
      </div>

      <h1 className='text-4xl font-semibold mt-8 '>
        Inform users with video sections
      </h1>
      <div className=' mt-14 flex mx-auto justify-center '>
        <iframe
          className='hidden lg:block'
          width='992'
          height='550'
          src='https://www.youtube.com/embed/bbv_m8kFXX4'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>
        <iframe
          className='sm:block lg:hidden'
          width='351'
          height='300'
          src='https://www.youtube.com/embed/bbv_m8kFXX4'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div></div>
        <div className='w-3/4'>
          <h1 className='text-[#37456C] ml-16 lg:ml-0'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium dolorem nihil dignissimos quae, sapiente eos quasi ut
            eveniet cum, iure, laudantium veniam! Amet rerum, deleniti totam
            expedita placeat maiores iure.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Video;

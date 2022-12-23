import React from "react";

const Video = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='flex'>
        <div className='h-16 w-16 bg-[#F7F9FC] absolute'></div>
        <h1 className='text-gray-500 uppercase relative ml-5 mt-5'>
          Video Title
        </h1>
      </div>

      <h1 className=' mt-8 text-4xl font-semibold '>
        Inform users with video sections
      </h1>
      <div className=' mt-14 flex mx-auto justify-center '>
        <iframe
          width='992'
          height='550'
          src='https://www.youtube.com/embed/bbv_m8kFXX4'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>
      </div>
      <div className='grid grid-cols-2'>
        <div></div>
        <div className='w-3/4'>
          <h1 className='text-[#37456C]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            repellat quibusdam deserunt, autem dolorum blanditiis quam ad,
            reprehenderit error suscipit atque in vitae repellendus labore minus
            dicta dolore ipsum architecto?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Video;

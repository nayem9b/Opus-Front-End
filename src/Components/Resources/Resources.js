import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const Resources = () => {
  return (
    <div>
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-bold'>Resources</h1>
          <button class='w-full px-6 py-3 mt-1 text-sm font-bold tracking-wide text-white transition-none bg-[#1355FF] hover:bg-[#0037c1] sm:mt-0 sm:w-auto sm:flex-shrink-0'>
            Get Started
          </button>
        </div>
        <div className='mt-20 grid grid-cols-1 lg:grid-cols-3  gap-x-5'>
          <Card1></Card1>
          <Card2></Card2>
          <Card3></Card3>
        </div>
      </div>
    </div>
  );
};

export default Resources;

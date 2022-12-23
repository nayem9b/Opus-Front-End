import React from "react";
import Card from "./Card";

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
        <div className='mt-20 grid grid-cols-3 gap-20'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default Resources;

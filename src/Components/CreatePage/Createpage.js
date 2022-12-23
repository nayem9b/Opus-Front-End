import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { BsCardImage } from "react-icons/bs";

const Createpage = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='grid grid-cols-2'>
        <div>
          <div className='flex'>
            <div className='mouse'>
              <FaPaperPlane className='text-white m-10 bg-[#1355FF]'></FaPaperPlane>
              <BsCardImage className='text-white m-10 bg-[#1355FF]'></BsCardImage>
            </div>
            <div className='grid grid-rows-2'>
              <h1 className='text-3xl font-semibold'>
                Choose <br /> your sections
              </h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                incidunt dolor omnis deserunt, soluta dolorum facere iste quo
                impedit earum.
              </h1>
            </div>
          </div>
        </div>
        <div className='grid grid-rows-2'>
          <div>
            <h1 className='font-bold text-5xl '>
              Create pages using <br /> beautiful components
            </h1>
          </div>
          <div className='grid grid-rows-2 gap-8'>
            <h1 className='font-normal text-base text-justify'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident temporibus veniam voluptas ut praesentium eius cum
              accusamus ducimus consectetur nesciunt.
            </h1>
            <div>
              <button className='px-8 py-3 bg-[#F7F9FC]'>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createpage;

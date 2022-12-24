import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { BsCardImage } from "react-icons/bs";

const Createpage = () => {
  return (
    <div className='max-w-screen-xl  mt-24 mx-5 lg:mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='order-last sm:order-first'>
          <div className='flex'>
            <div className='mouse'>
              <div className='bg-[#1355FF] px-6 py-6'>
                {" "}
                <FaPaperPlane className='text-white  text-center justify-center items-center mx-auto'></FaPaperPlane>
              </div>
              {/* <div className='bg-[#1355FF] px-6 py-6 my-8'>
                {" "}
                <BsCardImage className='text-white  text-center justify-center items-center mx-auto'></BsCardImage>
              </div> */}
            </div>
            <div className='grid grid-rows-2 ml-8'>
              <h1 className='text-3xl font-bold'>
                Choose <br /> your sections
              </h1>
              <h1 className=' mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                incidunt dolor omnis deserunt, soluta dolorum facere iste quo
                impedit earum.
              </h1>
            </div>
          </div>
          <div className='flex'>
            <div></div>
            <div className='mouse mt-16'>
              {/* <div className='bg-[#1355FF] px-6 py-6'>
                {" "}
                <FaPaperPlane className='text-white  text-center justify-center items-center mx-auto'></FaPaperPlane>
              </div> */}
              <div className='bg-[#1355FF] p-6 py-6'>
                {" "}
                <BsCardImage className='text-white  text-center justify-center items-center mx-auto'></BsCardImage>
              </div>
            </div>
            <div className='grid grid-rows-2 ml-8 mt-16 '>
              <h1 className='text-3xl font-bold'>
                Add the images <br /> and text you need
              </h1>
              <h1 className=' mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                incidunt dolor omnis deserunt, soluta dolorum facere iste quo
                impedit earum.
              </h1>
            </div>
          </div>
        </div>
        <div className='grid grid-rows-3'>
          <div>
            <h1 className='font-bold text-5xl '>
              Create pages using <br /> beautiful components
            </h1>
          </div>
          <div className='grid grid-rows-2 gap-y-1 sm:gap-y-3 ml-14'>
            <h1 className='font-normal text-base text-justify '>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident temporibus veniam voluptas ut praesentium eius cum
              accusamus ducimus consectetur nesciunt.
            </h1>
            <div>
              <button className='px-8 py-3 my-3 bg-[#F7F9FC]'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createpage;

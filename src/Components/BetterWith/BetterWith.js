import React from "react";
import { FaMousePointer } from "react-icons/fa";
import { RiRocketLine } from "react-icons/ri";

const BetterWith = () => {
  return (
    <div className='max-w-screen-xl mx-auto mt-[203px]'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='mx-4'>
          <h1 className='text-4xl font-bold sm:text-5xl'>
            Make your site <br />
            better with Opus
          </h1>
          <div className='grid grid-rows-2 lg:ml-16 mt-2'>
            <h1 className='text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur recusandae, fugiat itaque, corporis odio ab tenetur
              quibusdam nihil cumque explicabo dignissimos quasi tempore. Modi
              quod ullam reprehenderit? Unde, repudiandae aperiam.
            </h1>
            <button className=' w-40 h-12 font-medium text-sm bg-[#1355FF] text-white mt-14'>
              Learn More
            </button>
          </div>
        </div>

        <div className='grid grid-rows-2 gap-5  mt-[40px] lg:mt-0 ml-0 lg:ml-28'>
          <div className='absolute ml-16 lg:36 bg-[#F2F3F8] h-[480px] w-[320px] lg:h-[496px] lg:w-[342px]'></div>
          <div className=' w-scren lg:w-[418px] h-[184px] bg-white relative'>
            <div className=' text-3xl font-bold ml-10 mt-8 mb-8'>
              <div className='grid grid-rows-2 gap-y-1'>
                <FaMousePointer className='text-[#1355FF]'></FaMousePointer>
                <h1 className='font-bold text-2xl'>
                  Build and Customize a <br /> Website in Minutes{" "}
                </h1>
              </div>
            </div>
          </div>
          <div className='w-screen lg:w-[418px] h-[184px] bg-white relative'>
            <div className=' text-3xl font-bold ml-10 mt-8 mb-8'>
              <div className='grid grid-rows-2 gap-y-1'>
                <RiRocketLine className='text-[#1355FF]'></RiRocketLine>
                <h1 className='font-bold text-2xl'>
                  Our UI kit was made for <br /> creativity{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetterWith;

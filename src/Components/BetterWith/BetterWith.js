import React from "react";
import { FaMousePointer } from "react-icons/fa";
import { RiRocketLine } from "react-icons/ri";

const BetterWith = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='grid grid-cols-2'>
        <div>
          <h1 className='text-4xl font-bold'>
            Make your site <br />
            better with Opus
          </h1>
          <div className='grid grid-rows-2'>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur recusandae, fugiat itaque, corporis odio ab tenetur
              quibusdam nihil cumque explicabo dignissimos quasi tempore. Modi
              quod ullam reprehenderit? Unde, repudiandae aperiam.
            </h1>
            <button className='px-10 py-3 w-60 bg-blue-700 text-white'>
              Learn More
            </button>
          </div>
        </div>

        <div className='grid grid-rows-2 gap-5'>
          <div className='absolute ml-36 bg-blue-600 h-[496px] w-[342px] '>
            {" "}
            hello
          </div>
          <div className='w-[418px] h-[184px] bg-yellow-400 relative'>
            <div className=' text-3xl font-bold ml-10 mt-8 mb-8'>
              <div className='grid grid-rows-2 gap-y-1'>
                <FaMousePointer className='text-[#1355FF]'></FaMousePointer>
                <h1 className='font-bold text-2xl'>
                  Build and Customize a <br /> Website in Minutes{" "}
                </h1>
              </div>
            </div>
          </div>
          <div className='w-[418px] h-[184px] bg-yellow-400 relative'>
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

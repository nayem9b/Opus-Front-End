import React, { useEffect, useState } from "react";
import ceo from "../Assets/ceo main cropped.png";
import { ImQuotesLeft } from "react-icons/im";
const Header = () => {
  const [headerText, setHeaderText] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/text")
      .then((res) => res.json())
      .then((data) => setHeaderText(data));
  }, [headerText]);
  console.log(headerText);
  return (
    <div className='  flex'>
      <div className='w-[193300px] sm:screen lg:w-2/3  h-[615px] mt-12 bg-[#061237]'>
        {/* <h1 className='flex text-white justify-center items-center mx-auto text-center'>
          ON top over
        </h1> */}
        <div className='grid grid-cols-2 z-20'>
          <div className='mt-20'>
            {headerText.map((htext) => (
              <h1 className='flex text-white text-start lg:justify-center items-center mx-auto font-bold text-5xl '>
                {htext.text}
              </h1>
            ))}
            <div className='mt-20 hidden lg:block'>
              <h1 className='flex text-white text-start justify-center items-center ml-32'>
                Opus includes everything you need to build a beautiful website
                for your business. Built to perform and look good doing so.
              </h1>
              <button
                class='inline-flex items-center rounded border-none bg-[#1355FF] px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 ml-32 mt-10'
                href='/'>
                <span class='text-sm font-medium'>Learn more </span>

                <svg
                  class='ml-3 h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <div>
              <div className=' ml-96 h-[288px] w-[336px] mt-[362px] relative bg-white z-40 hidden lg:block'>
                <div className=''>
                  <div className=' grid grid-rows-2 gap-1 mt-10 ml-12 mr-16 absolute'>
                    <h1>
                      I felt like I couldn’t grow until I moved to Opus. Now I
                      am encouraged to sell more with them.
                    </h1>

                    <div className='flex justify-between mt-6'>
                      <div className='grid grid-rows-2  '>
                        <h1 className='font-bold text-2xl'>Frank Dublin</h1>
                        <h1 className='font-bold text-2xl'>
                          CEO <span className='text-[#1355FF]'>@STAMP</span>
                        </h1>
                      </div>
                      <ImQuotesLeft className='text-4xl text-[#DADDE7]'></ImQuotesLeft>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=' sm:bg-[#1355FF] w-1/3 h-[517px]'></div>
      <div className=' absolute grid grid-cols-4 z-30'>
        <div></div>
        <div></div>
        <div>
          <img
            src={ceo}
            className='h-[427px] lg:h-[586px]  w-[342px] lg:w-[470px] mt-28 object-contain '
            alt=''
          />

          <div class='relative h-28 w-96 bg-[#1355FF] hidden lg:block mt-[-60px]'>
            <div class='absolute inset-x-0 bottom-0 '></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

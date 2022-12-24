import React from "react";
import ceo from "../Assets/ceo main cropped.png";
import { ImQuotesLeft } from "react-icons/im";
const Header = () => {
  return (
    <div className='  flex'>
      <div className='w-[53300px] lg:w-2/3  h-[615px] mt-12 bg-[#061237]'>
        <h1 className='flex text-white justify-center items-center mx-auto text-center'>
          ON top over
        </h1>
        <div className='grid grid-cols-2 z-20'>
          <h1 className='flex text-white justify-center items-center mx-auto text-center'>
            ON top over
          </h1>
          <div>
            <div>
              <div className=' ml-96 h-[288px] w-[336px] mt-[362px] relative bg-white z-40'>
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
        <img
          src={ceo}
          className='h-[427px] lg:h-[586px]  w-[342px] lg:w-[470px] mt-28 object-contain'
          alt=''
        />
      </div>
    </div>
  );
};

export default Header;

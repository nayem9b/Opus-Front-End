import React from "react";
import ceo from "../Assets/ceo main cropped.png";
const Header = () => {
  return (
    <div className='  flex'>
      <div className='w-2/3 h-[615px] mt-12 bg-[#061237]'>
        <div className='grid grid-cols-2 z-20'>
          <div></div>
          <div>
            <div>
              <div className=' ml-96 h-[288px] w-[336px] mt-[362px] relative bg-white z-40'>
                <div className=''>
                  <div className=' grid grid-rows-2 gap-1 mt-10 ml-12 mr-16 absolute'>
                    <h1>
                      I felt like I couldn’t grow until I moved to Opus. Now I
                      am encouraged to sell more with them.
                    </h1>

                    <div className='grid grid-cols-2 mt-6'></div>
                    <div className='grid grid-rows-2  '>
                      <h1 className='font-bold text-2xl'>Frank Dublin</h1>
                      <h1 className='font-bold text-2xl'>
                        CEO <span className='text-[#1355FF]'>@STAMP</span>
                      </h1>
                    </div>
                    <div>hello</div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#1355FF] w-1/3 h-[517px]'></div>
      <div className=' absolute grid grid-cols-4 z-30'>
        <div></div>
        <div></div>
        <img src={ceo} className='h-[586px] w-[470px] mt-28 ' alt='' />
      </div>
    </div>
  );
};

export default Header;

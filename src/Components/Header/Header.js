import React from "react";
import ceo from "../Assets/ceo main cropped.png";
const Header = () => {
  return (
    <div className='w-screen h-[780px] mt-12 bg-[#061237]'>
      <div className='grid grid-cols-3 z-10'>
        <div></div>
        <div></div>
        <div className='bg-[#1355FF] mt-[-50px] h-96'>
          {" "}
          <h1>hi</h1>
        </div>
      </div>
      <div className='grid grid-cols-2 z-20'>
        <div></div>
        <div>
          <img src={ceo} className='h-[587px] absolute -mt-60' alt='' />
          <div>
            <div className=' ml-40 h-[288px] w-[336px]  relative bg-yellow-400 z-40'>
              <h1 className='mt-8 ml-12 mr-16'>
                I felt like I couldn’t grow until I moved to Opus. Now I am
                encouraged to sell more with them.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

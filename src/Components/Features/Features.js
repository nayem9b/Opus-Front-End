import React from "react";
import woman1 from "../Assets/woman 1.jpg";
import { BsCheckCircle } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
const Features = () => {
  return (
    <div>
      <section class='px-4  mx-auto max-w-7xl mt-40 lg:mt-10'>
        <div class='grid items-center grid-cols-1 md:grid-cols-2 '>
          <div>
            <div className='flex mx-1 lg:mx-0'>
              <div className='h-16 w-16 bg-[#F7F9FC] absolute'></div>
              <h1 className='text-gray-500 uppercase relative ml-5 mt-5'>
                Features
              </h1>
            </div>
            <h2 class='mb-4 text-2xl font-extrabold tracking-tight text-start  text-black md:leading-tight sm:text-left md:text-4xl mt-6 '>
              You’re not just doing business. You’re doing life.
            </h2>
            <p class='mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg'>
              <div className='grid grid-rows-3 gap-5'>
                <div className='flex gap-x-3'>
                  <BsCheckCircle className='text-blue-500 '></BsCheckCircle>
                  <h1 className='-mt-1'> Responsive Components</h1>
                </div>
                <div className='flex gap-x-3'>
                  <BsCheckCircle className='text-blue-500 '></BsCheckCircle>
                  <h1 className='-mt-1'> Over 50 Sections</h1>
                </div>
                <div className='flex gap-x-3'>
                  <BsCheckCircle className='text-blue-500 '></BsCheckCircle>
                  <h1 className='-mt-1'> Handcrafted Pages</h1>
                </div>
              </div>
            </p>
          </div>
          <div class='w-full h-full '>
            <img src={woman1} alt='' />
          </div>
        </div>
        <div class='grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2'>
          <div class='order-none md:order-2 lg:ml-40'>
            <div>
              <div className='flex mx-1 lg:mx-0'>
                <div className='h-16 w-16 bg-[#F7F9FC] absolute'></div>
                <h1 className='text-gray-500 uppercase relative ml-5 mt-5'>
                  Our Knowledge
                </h1>
              </div>
              <h2 class='mb-4 text-2xl font-extrabold tracking-tight text-start  text-black md:leading-tight sm:text-left md:text-4xl mt-6 '>
                A UI kit that's <br /> mordern and eligent
              </h2>
            </div>
            <p class='mb-5 text-base  text-start  text-gray-600  md:text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              repudiandae, exercitationem aut omnis natus doloribus harum nemo
              maiores quasi deleniti quos ad in delectus, ratione atque
              obcaecati, voluptas numquam aperiam?
            </p>
          </div>
          <div class='object-cover pt-[270px] '>
            <img
              src='https://images.unsplash.com/photo-1630004184878-c60794d1c105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=916&q=80'
              alt=''
            />
          </div>
        </div>
        <div class='grid items-center grid-cols-1  md:grid-cols-2 '>
          <div>
            {/* <h2 class='mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl'>
              Clear overview for efficient tracking
            </h2> */}
            <div className='flex mx-auto text-center justify-center'>
              <BiDetail className='text-3xl font-bold'></BiDetail>
              <h1 className='text-lg font-bold'>Stamps</h1>
            </div>
            <h1 class='mb-5  font-bold text-2xl text-[#333333] sm:text-left md:text-lg'>
              The Opus UI kit lets you <br /> showcase your work in style.{" "}
              <br /> It helped take our business online
            </h1>
            <div>
              <h1>ALEXA F.</h1>
              <h1 className='text-xs font-bold'>
                DESIGNER{" "}
                <span className='text-[#1355FF]  text-xs font-bold'>
                  @ STAMPS
                </span>{" "}
              </h1>
            </div>
          </div>
          <div class='w-full h-full py-48'>
            <img
              className=' obejct-fit'
              src='https://images.unsplash.com/photo-1560096434-c1cec8609cc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
              alt=''
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;

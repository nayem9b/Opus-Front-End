import React from "react";
import woman1 from "../Assets/woman 1.jpg";
import { BsCheckCircle } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
const Features = () => {
  return (
    <div>
      <section class='px-4 py-24 mx-auto max-w-7xl'>
        <div class='grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24'>
          <div>
            <h2 class='mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl'>
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
          <div class='w-full h-full py-48 '>
            <img src={woman1} alt='' />
          </div>
        </div>
        <div class='grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24'>
          <div class='order-none md:order-2'>
            <h2 class='mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl'>
              A UI kit thats mordern and eligent
            </h2>
            <p class='mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              repudiandae, exercitationem aut omnis natus doloribus harum nemo
              maiores quasi deleniti quos ad in delectus, ratione atque
              obcaecati, voluptas numquam aperiam?
            </p>
          </div>
          <div class='w-full h-full py-48 '>
            <img
              src='https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
              alt=''
            />
          </div>
        </div>
        <div class='grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24'>
          <div>
            {/* <h2 class='mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl'>
              Clear overview for efficient tracking
            </h2> */}
            <div className='flex mx-auto text-center justify-center'>
              <BiDetail className='text-3xl font-bold'></BiDetail>
              <h1 className='text-lg font-bold'>Stamps</h1>
            </div>
            <p class='mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg'>
              Handle your subscriptions and transactions efficiently with the
              clear overview in Dashboard. Features like the smart search option
              allow you to quickly find any data you’re looking for.
            </p>
            <a href='#' class='w-full btn btn-dark btn-lg sm:w-auto'>
              Learn More
            </a>
          </div>
          <div class='w-full h-full py-48 bg-gray-200'></div>
        </div>
      </section>
    </div>
  );
};

export default Features;

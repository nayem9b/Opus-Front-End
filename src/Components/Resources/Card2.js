import React from "react";

const Card2 = () => {
  return (
    <div>
      <article class='overflow-hidden  shadow-sm mx-11 lg:mx-0'>
        <img
          alt='Office'
          src='https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          class='h-56 w-full object-cover'
        />

        <div class='p-4 sm:p-6'>
          <a href='#'>
            <h3 class='text-lg font-medium text-gray-900'>
              With a clean, minimal and <br /> professional look
            </h3>
          </a>

          <p class='mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eius.
            Similique possimus ipsa impedit culpa voluptatum rerum excepturi
            voluptatem consectetur.
          </p>

          <button className='px-[34px] py-[13px] bg-[#F7F9FC] hover:bg-[#b7b8b9]'>
            Read article
          </button>
        </div>
      </article>
    </div>
  );
};

export default Card2;

import React from "react";

const Card3 = () => {
  return (
    <div>
      <article class='overflow-hidden  shadow-sm mx-11 lg:mx-0'>
        <img
          alt='Office'
          src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
          class='h-56 w-full object-cover'
        />

        <div class='p-4 sm:p-6'>
          <a href='#'>
            <h3 class='text-lg font-medium text-gray-900'>
              Opus made our journey <br /> possible
            </h3>
          </a>

          <p class='mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            incidunt similique accusamus voluptate repudiandae quo veritatis
            itaque explicabo culpa officia.
          </p>

          <button className='px-[34px] py-[13px] bg-[#F7F9FC] hover:bg-[#b7b8b9]'>
            Read article
          </button>
        </div>
      </article>
    </div>
  );
};

export default Card3;

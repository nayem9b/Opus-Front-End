import React from "react";

const Card = () => {
  return (
    <div>
      <article class='overflow-hidden rounded-lg shadow-sm'>
        <img
          alt='Office'
          src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          class='h-56 w-full object-cover'
        />

        <div class='p-4 sm:p-6'>
          <a href='#'>
            <h3 class='text-lg font-medium text-gray-900'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
          </a>

          <p class='mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>

          <button className='px-[34px] py-[13px] bg-[#F7F9FC] hover:bg-[#b7b8b9]'>
            Read article
          </button>
        </div>
      </article>
    </div>
  );
};

export default Card;

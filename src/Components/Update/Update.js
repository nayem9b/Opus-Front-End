import React from "react";

const Update = () => {
  return (
    <div>
      <section class=''>
        <div class='max-w-3xl px-6 py-16 '>
          <h1 class='text-3xl font-semibold '>Want to update the header?</h1>

          <div class='flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2'>
            <input
              id='email'
              type='text'
              class='pr-20 py-2  border rounded-md sm:mx-2 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
              placeholder='Text'
            />

            <button class='px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#1355FF] rounded-md sm:mx-2 hover:bg-[#033dd1] focus:outline-none focus:bg-blue-600'>
              Update
            </button>
          </div>
        </div>
        <div class='max-w-3xl px-6 py-16 '>
          <h1 class='text-3xl font-semibold '>Want to update image?</h1>

          <div class='flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2'>
            <input
              type='file'
              className='file-input file-input-bordered file-input-primary w-full max-w-xs'
            />

            <button class='px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#1355FF] rounded-md sm:mx-2 hover:bg-[#033dd1] focus:outline-none focus:bg-blue-600'>
              Update
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Update;

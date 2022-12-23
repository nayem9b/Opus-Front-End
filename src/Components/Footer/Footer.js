import React from "react";
import logo from "../Assets/company-logo.png";
const Footer = () => {
  return (
    <div>
      <footer aria-label='Site Footer' class='bg-white'>
        <div class='max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8'>
          <div class='lg:grid lg:grid-cols-2'>
            <div class='py-8  lg:order-last  lg:py-16 lg:pl-16'>
              <div class='mt-8 space-y-4 lg:mt-0'>
                <form class='w-full mt-6'>
                  <label for='UserEmail' class='sr-only'>
                    {" "}
                    Email{" "}
                  </label>

                  <div class='p-2 border border-gray-100 rounded-md focus-within:ring sm:flex sm:items-center sm:gap-4'>
                    <input
                      type='email'
                      id='UserEmail'
                      placeholder='Email address'
                      class='w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm'
                    />

                    <button class='w-full px-6 py-3 mt-1 text-sm font-bold tracking-wide text-white transition-none bg-[#1355FF] hover:bg-[#0037c1] sm:mt-0 sm:w-auto sm:flex-shrink-0'>
                      Get Started
                    </button>
                  </div>
                </form>
              </div>
              <div className='grid grid-cols-2 mt-9'>
                <div>
                  <h1 className='text-[#B6BCCE] h-6'>OPUS FOR WEBFLOW</h1>
                  <h1 className='text-[#1355FF] font-bold text-2xl mt-3'>
                    Lorem Ipsum
                  </h1>
                </div>
                <div className='text-[#B6BCCE] h-6'>
                  <h1 className='text-[#B6BCCE] h-6'> OPUS FOR FIGMA</h1>
                  <h1 className='text-[#1355FF] font-bold text-2xl mt-3'>
                    Lorem Ipsum
                  </h1>
                </div>
              </div>
              <h1 class='mt-8 text-sm text-gray-500'>
                &copy; Template by{" "}
                <span className='text-[#1355FF]'> Lorem </span> powered by{" "}
                <span className='text-[#1355FF]'>Ipsum</span>
              </h1>
            </div>

            <div class='py-8 lg:py-16 lg:pr-16'>
              <a
                href='/'
                aria-label='OPUS'
                title='OPUS'
                class='inline-flex items-center'>
                <img src={logo} className='w-12 mt-4' alt='' />
                <span class='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                  OPUS
                </span>
              </a>
              <div class='grid grid-cols-1 gap-8 mt-8 sm:grid-cols-3'>
                <div>
                  <p class='font-medium text-[#B6BCCE]'>Overview</p>

                  <nav aria-label='Footer Navigation - Services' class='mt-6'>
                    <ul class='space-y-4 text-sm'>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Overview
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Landing
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Company
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          CMS Pages
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Accounts
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Buy for Figma
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div>
                  <p class='font-medium  text-[#B6BCCE]'>Company</p>

                  <nav aria-label='Footer Navigation - Company' class='mt-6'>
                    <ul class='space-y-4 text-sm'>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Landing 1
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Landing 2
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Landing 3
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Company 1
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Company 2
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Company 3
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Blog 1
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Blog 2
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Contact 1
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Contact 2
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Contact 3
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div>
                  <p class='font-medium text-[#B6BCCE]'>Pages</p>

                  <nav aria-label='Footer Navigation - Company' class='mt-6'>
                    <ul class='space-y-4 text-sm'>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Case Studies
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Careers
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Pricing 1
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Pricing 2
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Pricing 3
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Login
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Register
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Forgot Password
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Blog Post
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Team Member
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Case Study
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='font-semibold transition hover:opacity-75'>
                          Job Post
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div class='pt-8 mt-8 border-t border-spacing-x-96 border-gray-100'>
            <nav aria-label='Footer Navigation - Support'>
              <ul class='flex flex-wrap gap-12 text-xs'>
                <li>
                  <a href='#' class='text-gray-500 transition hover:opacity-75'>
                    Style Guide
                  </a>
                </li>

                <li>
                  <a href='#' class='text-gray-500 transition hover:opacity-75'>
                    Licence
                  </a>
                </li>

                <li>
                  <a href='#' class='text-gray-500 transition hover:opacity-75'>
                    Changelog
                  </a>
                </li>
              </ul>
            </nav>
            <div className='divider'></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

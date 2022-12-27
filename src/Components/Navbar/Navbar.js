import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/company-logo.png";
import { AuthContext } from "../Context/UserContext";
import useAdmin from "../Hooks/useAdmin";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const handleLogout = () => {
    logout();
    console.log("user logged out");
  };
  return (
    <div className='sticky top-0 h-16 bg-white z-50'>
      <div class=' px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div class='relative flex items-center justify-between mx-auto text-center'>
          <Link
            to='/'
            aria-label='OPUS'
            title='OPUS'
            class='inline-flex items-center'>
            <img src={logo} className='w-12 mt-4' alt='' />
            <span class='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
              OPUS
            </span>
          </Link>
          <ul class='flex items-center hidden space-x-8 lg:flex  flex items-center justify-between mx-auto text-center'>
            <li>
              <a
                href='/'
                aria-label=' Overview'
                title=' Overview'
                class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                Overview
              </a>
            </li>
            <li>
              <a
                href='/'
                aria-label='   Pages'
                title='   Pages'
                class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                Pages
              </a>
            </li>
            <li>
              <a
                href='/'
                aria-label=' Templates'
                title=' Templates'
                class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                Templates
              </a>
            </li>
            <li>
              <a
                href='https://digilabs-website.web.app/#about'
                aria-label='About us'
                title='About us'
                class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                About us
              </a>
            </li>
            {isAdmin && (
              <li>
                <Link
                  to='/dashboard'
                  aria-label='About us'
                  title='Dashboard'
                  class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          <Link
            to='/contact'
            class=' hidden lg:inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#1355FF] hover:bg-[#0644e2] focus:shadow-outline focus:outline-none'
            aria-label='     Contact us'
            title='     Contact us'>
            Contact us
          </Link>
          {user ? (
            <button
              className='ml-3 px-5 py-3 bg-black text-white text-lg rounded-lg hidden lg:block'
              onClick={handleLogout}>
              Log out
            </button>
          ) : (
            <div className='flex'>
              <Link
                to='/register'
                className='ml-3 px-5 py-3 border-black border-2 text-lg rounded-lg hidden lg:block'>
                Sign up
              </Link>
              <Link
                to='/login'
                className='ml-3 px-5 py-3 bg-black text-white text-lg rounded-lg hidden lg:block'>
                Signin
              </Link>
            </div>
          )}
          <div class='lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              class='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
              onClick={() => setIsMenuOpen(true)}>
              <svg class='w-5 text-gray-600' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class='absolute top-0 left-0 w-full'>
                <div class='p-5 bg-white border rounded shadow-sm'>
                  <div class='flex items-center justify-between mb-4'>
                    <div>
                      <a
                        href='/'
                        aria-label='  OPUS'
                        title='  OPUS'
                        class='inline-flex items-center'>
                        <img src={logo} className='w-12 mt-4' alt='' />
                        <span class='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                          OPUS
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        class='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}>
                        <svg class='w-5 text-gray-600' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class='space-y-4'>
                      {isAdmin && (
                        <>
                          {" "}
                          <li>
                            <Link
                              href='/dashboard/update'
                              aria-label=' Overview'
                              title=' Overview'
                              class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                              Update info
                            </Link>
                          </li>
                          <li>
                            <Link
                              to='/dashboard/allemails'
                              aria-label='Pages'
                              title='Pages'
                              class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                              All emails
                            </Link>
                          </li>
                        </>
                      )}
                      <li>
                        <a
                          href='/'
                          aria-label='Templates'
                          title='Templates'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                          Templates
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          aria-label='About us'
                          title='About us'
                          class='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
                          About us
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          class='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none'
                          aria-label=' Contact us'
                          title=' Contact us'>
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

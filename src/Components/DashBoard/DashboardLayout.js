import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

import useAdmin from "../Hooks/useAdmin";

import Navbar from "../Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className='drawer drawer-mobile '>
        <input
          id='dashboard-drawer'
          type='checkbox'
          className='drawer-toggle '
        />

        <div className='drawer-content '>
          <Outlet></Outlet>
        </div>
        <div className='drawer-side bg-gradient-to-r from-gray-200 to-gray-300 '>
          <label htmlFor='dashboard-drawer' className='drawer-overlay'></label>
          <ul className='menu p-4 w-80 text-base-content'>
            {isAdmin && (
              <>
                <li>
                  <Link to='/dashboard/allbuyers'>Update info</Link>
                </li>
                <li>
                  <Link to='/dashboard/allsellers'>All emails</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import DashboardLayout from "../DashBoard/DashboardLayout";
import Errorpage from "../Errorpage/Errorpage";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Root from "../Root/Root";
import SimplePage from "../SimplePage/SimplePage";
import Update from "../Update/Update";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <SimplePage></SimplePage>,
      },
      // {
      //   path: "/dashboard/update",
      //   element: <SimplePage></SimplePage>,
      // },

      {
        path: "/dashboard/update",
        element: (
          <AdminRoute>
            <Update></Update>
          </AdminRoute>
        ),
      },
      // {
      //   path: "/dashboard/update",
      //   element: (
      //     <AdminRoute>
      //       <Update></Update>
      //     </AdminRoute>
      //   ),
      // },
    ],
  },
]);

export default router;

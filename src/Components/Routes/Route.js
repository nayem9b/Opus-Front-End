import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import Errorpage from "../Errorpage/Errorpage";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Root from "../Root/Root";

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
]);

export default router;

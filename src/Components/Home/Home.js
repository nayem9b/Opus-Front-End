import React from "react";

import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Stats from "../Stats/Stats";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Stats></Stats>
      <Features></Features>

      <Footer></Footer>
    </div>
  );
};

export default Home;

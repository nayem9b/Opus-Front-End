import React from "react";

import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Resources from "../Resources/Resources";
import Stats from "../Stats/Stats";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Stats></Stats>
      <Features></Features>
      <Resources></Resources>
      <Footer></Footer>
    </div>
  );
};

export default Home;

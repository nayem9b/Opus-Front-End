import React from "react";
import BetterWith from "../BetterWith/BetterWith";
import Createpage from "../CreatePage/Createpage";

import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Resources from "../Resources/Resources";
import Stats from "../Stats/Stats";
import TrustedBy from "../TruestedBy/TrustedBy";
import Video from "../Video/Video";
import WorkWithUs from "../WorkWithUs/WorkWithUs";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <TrustedBy></TrustedBy>
      <Stats></Stats>
      <Video></Video>
      <BetterWith></BetterWith>
      <WorkWithUs></WorkWithUs>
      <Createpage></Createpage>
      <Features></Features>
      <Resources></Resources>

      <Footer></Footer>
    </div>
  );
};

export default Home;

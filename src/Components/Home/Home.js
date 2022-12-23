import React from "react";

import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Resources from "../Resources/Resources";
import Stats from "../Stats/Stats";
import TrustedBy from "../TruestedBy/TrustedBy";
import Video from "../Video/Video";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <TrustedBy></TrustedBy>
      <Stats></Stats>
      <Video></Video>
      <Features></Features>
      <Resources></Resources>

      <Footer></Footer>
    </div>
  );
};

export default Home;

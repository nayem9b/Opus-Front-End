import React from "react";
import BetterWith from "../BetterWith/BetterWith";
import Createpage from "../CreatePage/Createpage";
import Lottie from "lottie-react";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Resources from "../Resources/Resources";
import Stats from "../Stats/Stats";
import TrustedBy from "../TruestedBy/TrustedBy";
import Video from "../Video/Video";
import WorkWithUs from "../WorkWithUs/WorkWithUs";
import dashboard from ".././Assets/58925-sms-header-enterprise.json";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <TrustedBy></TrustedBy>
      <Stats></Stats>
      <div className=' flex justify-center mt-10 lg:mt-16 '>
        <Lottie animationData={dashboard} loop={true} />
      </div>
      <Video></Video>
      <BetterWith></BetterWith>
      <WorkWithUs></WorkWithUs>
      <Createpage></Createpage>
      <Features></Features>
      <Resources></Resources>
    </div>
  );
};

export default Home;

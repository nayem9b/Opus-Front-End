import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <h1>This is home Component</h1>
      <Footer></Footer>
    </div>
  );
};

export default Home;

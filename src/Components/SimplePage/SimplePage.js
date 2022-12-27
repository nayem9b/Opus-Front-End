import React from "react";
import Lottie from "lottie-react";
import hello from "../Assets/58925-sms-header-enterprise.json";
const SimplePage = () => {
  return (
    <div>
      <div className=' flex justify-center '>
        <Lottie animationData={hello} loop={true} />
      </div>
    </div>
  );
};

export default SimplePage;

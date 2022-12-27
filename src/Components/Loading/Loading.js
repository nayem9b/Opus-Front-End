import React from "react";
import Lottie from "lottie-react";
import hello from "../Assets/75086-hello.json";
const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className=' flex justify-center '>
        <Lottie animationData={hello} loop={true} />
      </div>
    </div>
  );
};

export default Loading;

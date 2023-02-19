import React from "react";
import image from "./assets/media/heroImage.png";

const Hero = () => {
  return (
    <div className="flex justify-center my-10">
      <div className="glass shadow-2xl shadow-white-main ">
        <img
          src={image}
          alt=""
          className="h-98 rounded-xl blur-sm"
        />
      </div>
      <div className="fixed top-80 text-8xl text-white ">
        <p className=" ">Learn. Teach. GROW.</p>

      </div>
    </div>
  );
};

export default Hero;

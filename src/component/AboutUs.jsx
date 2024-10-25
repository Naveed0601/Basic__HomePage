import React from "react";
import about from "../assets/images/image-web-3-desktop.jpg";

const AboutUs = () => {
  return (
    <div>
      <img src={about} alt="about" className="w-[700px]" />
      <div className=" mt-5 flex">
        <p className="text-6xl w-[350px] font-bold">
          The Bright Future of Web 3.0?
        </p>
        <div>
          <p className="w-[350px] text-gray-400">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="mt-10 bg-red-500 text-black hover:bg-black hover:text-white w-[150px] h-[50px] font-bold">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

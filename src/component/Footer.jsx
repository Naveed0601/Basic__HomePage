import React from "react";
import retro from "../assets/images/image-retro-pcs.jpg";
import laptop from "../assets/images/image-top-laptops.jpg";
import control from "../assets/images/image-gaming-growth.jpg";

const Footer = () => {
  return (
    <div className="mt-16 flex">
      <div className="flex w-[350px] ">
        <img src={retro} alt="retro" className="h-[100px]" />
        <div>
          <h1 className="ml-4 text-3xl font-bold text-orange-500">01</h1>
          <h1 className="ml-4 text-xl font-bold text-slate-900  hover:text-orange-500">
            Revising Retro PCs
          </h1>
          <p className="ml-4 text-sm text-gray-500">
            What happend when old PCs are given modern upgrads ?
          </p>
        </div>
      </div>
      <div className="flex w-[350px]">
        <img src={laptop} alt="laptop" className="h-[100px]" />
        <div>
          <h1 className="ml-4 text-3xl font-bold text-orange-500">02</h1>
          <h1 className="ml-4 text-xl font-bold text-slate-900  hover:text-orange-500">
            Top 10 Laptop of 2023
          </h1>
          <p className="ml-4 text-sm text-gray-500">
            Our best pick for various needs and boughts.
          </p>
        </div>
      </div>
      <div className="flex w-[350px]">
        <img src={control} alt="control" className="h-[100px]" />
        <div>
          <h1 className="ml-4 text-3xl font-bold text-orange-500">03</h1>
          <h1 className="ml-4 text-xl font-bold text-slate-900  hover:text-orange-500">
            The Growth of Gaming
          </h1>
          <p className="ml-4 text-sm text-gray-500">
            How the pandemic has sparked fresh opportunities
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

const Updates = () => {
  return (
    <div className="bg-slate-900 h-[490px] w-[330px] ml-10 p-4 ">
      <h1 className="text-yellow-400 text-5xl font-bold mb-6">New</h1>
      <div className="text-white border-b border-white pb-2">
        <h2 className="text-xl font-bold text-white hover:text-yellow-400">
          Hydrogen VS Electric Cars
        </h2>
        <p className="text-gray-500  text-sm font-normal mt-1 mb-10">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>
      <div className="text-white border-b border-white pb-2 mt-10">
        <h2 className="text-xl font-bold text-white hover:text-yellow-400">
          The Downsides of Al Artistry
        </h2>
        <p className="text-gray-500 text-sm font-normal mt-1 mb-6">
          What are the possible adverse effects of on-demand Al image
          generation?
        </p>
      </div>
      <div className="text-white  pb-2 mt-10">
        <h2 className="text-xl font-bold text-white hover:text-yellow-400">
          Is VC Funding Drying Up?
        </h2>
        <p className="text-gray-500 text-sm font-normal mt-1 mb-6">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means
        </p>
      </div>
    </div>
  );
};

export default Updates;

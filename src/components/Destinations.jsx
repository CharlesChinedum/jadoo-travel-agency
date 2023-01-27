import React from "react";

import { DestinationItem } from "../components";

import { destinations } from "../Data";

import Decore from "/assets/Decore(2).png";

const Destinations = () => {
  return (
    <div className="w-full h-[70vh] mb-[12rem] relative">
      <div className="w-full px-7 sm:px-[7rem] relative">
        <div className="w-full text-center">
          <p className="text-[#5E6282] text-[18px] font-[600] leading-[27px]">
            Top Selling
          </p>
          <h2 className="text-[#14182E] text-[50px] font-[700] leading-[64px] mb-12 volkhov">
            Top Destinations
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row w-full justify-between items-center">
          {destinations.map((item, index) => (
            <DestinationItem
              name={item.name}
              price={item.price}
              duration={item.duration}
              img={`../../public/assets/${item.img}`}
              key={index}
            />
          ))}
        </div>

        <div className="absolute top-60 right-20 -z-10">
          <img src={Decore} alt="Decore" />
        </div>
      </div>
    </div>
  );
};

export default Destinations;

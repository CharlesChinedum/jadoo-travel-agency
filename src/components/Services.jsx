import React from "react";

import serviceStars from "/assets/Service-stars.png";
import rectangle from "/assets/Services rectangle.png";

import { ServiceItem } from "../components";

import { services } from "../Data";

const Services = () => {
  return (
    <div className="w-full relative my-5 mb-[7rem] mt-20 sm:mt-0 services">
      <div className="w-full relative sm:px-[7rem] px-7">
        <div className="absolute top-0 right-0">
          <img
            src={serviceStars}
            alt="cluster of stars"
            className="hidden sm:block"
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[#5E6282] font-[600] text-[18px] leading-[27px]">
            CATEGORY
          </p>
          <h2 className="text-[#14183E] font-[700] text-[30px] sm:text-[50px] leading-[55px] mb-12 volkhov text-center">
            We Offer Best Services
          </h2>
        </div>

        <div className="flex z-10 flex-col sm:flex-row">
          {services.map((item, index) => (
            <ServiceItem
              title={item.title}
              body={item.body}
              img={`/assets/${item.img}`}
              alt={item.title}
              key={index}
            />
          ))}
        </div>

        <div className="absolute hidden sm:block sm:bottom-[0px] w-20 left-[433px] z-[-1]">
          <img src={rectangle} alt="rectangle" />
        </div>
      </div>
    </div>
  );
};

export default Services;

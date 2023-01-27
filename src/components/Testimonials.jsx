import React from "react";

import mockup from "/assets/Testimonials Mockup.png";
import dots from "/assets/Dots.png";

import { partners } from "../Data";

const Testimonials = () => {
  return (
    <div className="w-full h-[70vh] px-7 sm:px-[7rem] mb-[13rem] mt-[15rem] sm:mt-0">
      <div className="w-full flex flex-col sm:flex-row pt-20">
        <div className="flex-1 w-full sm:w-1/2 mb-10 sm:mb-0">
          <h2 className="text-[#5E6282] text-[18px] font-[600] leading-[27px] uppercase">
            Testimonials
          </h2>
          <h1 className="text-[#14183E] text-[50px] font-700 leading-[64px] capitalize volkhov">
            What people say <br className="hidden sm:block" /> about us.
          </h1>
          <div className="mt-[7rem] hidden sm:block">
            <img src={dots} alt="dots" />
          </div>
        </div>

        <div className="flex-1 w-full sm:w-1/2">
          <img src={mockup} alt="mockup" className="w-[100%]" />
        </div>
      </div>

      <div className="w-full flex items-center justify-between">
        {partners.map((item, index) => (
          <div key={index}>
            <img src={`/assets/${item}`} alt={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

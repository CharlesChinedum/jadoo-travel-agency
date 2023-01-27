import React from "react";

import mockup from "/assets/mockup.png";

import { bookTrip } from "../Data";

const BookTrip = () => {
  return (
    <div className="h-[70vh] flex flex-col sm:flex-row justify-between px-7 sm:px-[7rem] mt-[65rem] sm:mt-0 book-trip">
      <div className="flex flex-col w-full sm:w-1/2 flex-1 justify-center">
        <p className="text-[#5E6282] text-[18px] font-[600] leading-[27px]">
          Easy and Fast
        </p>
        <h2 className="text-[#14183E] text-[50px] font-[700] leading-[64px] sm:pr-20 volkhov">
          Book Your Next Trip In 3 Easy Steps
        </h2>
        <div>
          {bookTrip.map((item, index) => (
            <div className="flex items-center my-10" key={index}>
              <img
                src={`/assets/${item.img}`}
                alt={item.title}
                className="w-12"
              />
              <div className="flex flex-col pl-5">
                <h2 className="text-[#5E6282] text-[16px] font-700 leading-[124.5%]">
                  {item.title}
                </h2>
                <p className="text-[#5E6282] text-[16px] font-400 leading-[124.5%]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full sm:w-1/2 flex-1">
        <img src={mockup} alt="Mockup" className="w-[100%]" />
      </div>
    </div>
  );
};

export default BookTrip;

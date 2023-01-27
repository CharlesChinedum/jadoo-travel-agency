import React from "react";

import decore from "/assets/Decore.png";
import traveller from "/assets/Traveller.png";
import playIcon from "/assets/playIcon.png";

import { subHeading, heading, heroDescription } from "../Data";

import { Navbar } from "../components";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] mb-[10rem] sm:mb-0 ">
      <div className="w-full relative  sm:px-[7rem] pt-3">
        <div className="absolute top-0 right-0 -z-10">
          <img src={decore} alt="decore" className="h-[40rem]" />
        </div>

        <div className="px-5 sm:px-0 navbar">
          <Navbar />
        </div>

        <div className="flex w-full h-[93.7vh]">
          <div className="flex flex-col flex-1 h-full justify-center w-1/2 px-7 sm:px-0">
            <p className="text-[#DF6951] font-[700] text-[15px] sm:text-[20px] leading-[30px]">
              {subHeading}
            </p>
            <h2 className="text-[#181E4B] font-[700] text-[70px] sm:text-[84px] tracking-[-0.04em] leading-[89px] volkhov">
              {heading}
            </h2>
            <p className="text-[16px] font-500 leading-[30px] my-5 sm:pr-[15rem]">
              {heroDescription}
            </p>
            <div className="flex items-center">
              <div>
                <button className="text-white border-0 p-2 px-3 bg-[#F1A501] rounded-[10px] shadow-[0px_20px_35px] shadow-[#F1A50126] mr-7">
                  Find out more
                </button>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#DF6951] flex items-center justify-center shadow-[0px_15px_30px] shadow-[#DF69514D]">
                  <img src={playIcon} alt="" />
                </div>
                <p className="px-4">Play Demo</p>
              </div>
            </div>
          </div>

          <div className="flex-1 z-10 w-1/2 hidden sm:block">
            <img src={traveller} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

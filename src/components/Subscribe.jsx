import React from "react";

import stars from "/assets/subscribe-stars.png";
import emailIcon from "/assets/email icon.png";
import firstSpiral from "/assets/subscribe spiral.png";
import secondSpiral from "/assets/subscribe spiral2.png";
import sendIcon from "/assets/send icon.png";

const Subscribe = () => {
  return (
    <div className="w-full h-[80vh] sm:h-[70vh] relative mb-10">
      <div className="w-full relative h-full px-7 sm:px-[7rem]">
        <div className="hidden sm:block">
          <img
            src={sendIcon}
            alt="send icon"
            className="absolute right-[5.1rem] top-20 z-10"
          />
        </div>
        <div className="h-full flex flex-col justify-center">
          <div className=" h-full sm:h-3/5 relative bg-[#DFD7F9] rounded-[129px_20px_20px_20px] p-5 flex">
            <div className="absolute top-0 right-0">
              <img
                src={secondSpiral}
                alt="spiral"
                className="w-[8rem] sm:w-[10rem] opacity-30"
              />
            </div>

            <div className="flex flex-col w-full h-full items-center justify-between py-7">
              <h1 className="text-[#5E6282] text-[27px] sm:text-[33px] font-600 leading-[54px] text-center poppins-title">
                Subscribe to get information, latest news and other <br />{" "}
                interesting offers about Jadoo
              </h1>

              <div className="flex flex-col sm:flex-row z-20 px-7 sm:px-5 ">
                <div className="bg-white flex mx-5 px-5 py-3 w-[20rem] rounded-[10px] items-center mr-5 mb-3 sm:mb-0">
                  <img
                    src={emailIcon}
                    alt="email Icon"
                    className="w-5 h-5 mr-3"
                  />
                  <input
                    type="text"
                    placeholder="Your email"
                    className="w-full z-10"
                  />
                </div>

                <button className="subscribe-btn rounded-[10px] py-3 sm:py-0 px-10 w-1/2 sm:w-auto text-white ml-[5.5rem] sm:ml-0 z-10">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="absolute bottom-0">
              <img
                src={firstSpiral}
                alt="spiral"
                className="w-[10rem] sm:w-[15rem] opacity-30"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 sm:bottom-12 right-2">
          <img src={stars} alt="stars" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

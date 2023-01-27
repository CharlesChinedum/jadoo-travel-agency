import React from "react";

import { FooterLink } from "../components";

import logo from "/assets/footer logo.png";

import { footerLinks } from "../Data";
import { footerIcons } from "../Data";
import { mobileStores } from "../Data";

const Footer = () => {
  return (
    <div className="w-full mb-20 pt-10 sm:pt-0">
      <div className="w-full px-7 sm:px-[7rem]">
        <div className="w-full flex flex-col sm:flex-row sm:justify-between">
          <div className=" w-full sm:w-1/2">
            <div className="sm:pr-20 pb-10 px-5 sm:px-0  w-full flex flex-col items-center">
              <img src={logo} alt="logo" className="mb-7" />
              <p className="text-[#5E6282] text-[13px] font-500 leading-[124.5%]">
                Book your trip in minute, get full control for much longer.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row text-center sm:text-start justify-between w-full sm:w-3/4">
            {footerLinks.map((item, index) => (
              <FooterLink title={item.title} list={item.body} key={index} />
            ))}
          </div>

          <div className="flex flex-col w-full sm:w-1/2">
            <div className="flex justify-between flex-col items-center sm:px-20">
              <div className="flex w-full justify-between">
                {footerIcons.map((icon, index) => (
                  <div key={index}>
                    <img src={`/assets/${icon}`} alt={icon} />
                  </div>
                ))}
              </div>
              <p className="text-[#5E6282] text-[20px] font-500 leading-[124.5%] my-2">
                Discover our app
              </p>

              <div className="flex">
                {mobileStores.map((store, index) => (
                  <div key={index} className="mr-3">
                    <img src={`/assets/${store.img}`} alt={store.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-center my-10">
          <p className="text-[#5E6282] text-[14px] font-500 leading-[124.5%] pb-10">
            All rights reserved@jadoo.co
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

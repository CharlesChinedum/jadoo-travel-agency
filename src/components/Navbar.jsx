import navArrow from "/assets/small-arrow-down.png";

import { useState } from "react";

import menu from "/assets/menu.svg";
import close from "/assets/close.svg";
import logo from "/assets/Logo.png";

import { navItems } from "../Data";
import NavButton from "./NavButton";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar z-10 mb-5">
      <div className="">
        <img src={logo} alt="hoobank" className="W-[124px] h-[32px]" />
      </div>

      <div className="w-[30%]">
        <ul className="list-none sm:flex hidden justify-between items-center flex-1">
          {navItems.map((nav, index) => (
            <li
              key={index}
              className={`text-[#212832] text-[17px] font-[400] leading-[22px]  poppinshover:cursor-pointer px-3 z-10 poppins ${
                index === navItems.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${nav.id}`}>{nav}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sm:flex hidden w-[20%] justify-between z-10">
        <NavButton name="Login" className="text-black mx-3 poppins" />
        <NavButton
          name="Sign Up"
          className="text-black px-5 py-2 border rounded-md poppins"
        />
        <div className="flex items-center hover:cursor-pointer">
          <p className="poppins">EN</p>
          <div className="mx-2">
            <img src={navArrow} alt="navArrow" />
          </div>
        </div>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center z-20">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28] h-[28px] object-contain z-20"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex flex-col " : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 ">
            {navItems.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] z-10 ${
                  index === navItems.length - 1 ? "mb-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav}</a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col z-10">
            <NavButton name="Login" className="text-white my-3" />
            <NavButton
              name="Sign Up"
              className="text-white border-y-2 border-x-2 border-white p-1 rounded-md"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

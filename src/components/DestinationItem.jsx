import React from "react";

import sendIcon from "../../public/assets/vector.png";

const DestinationItem = ({ name, price, duration, img, alt }) => {
  return (
    <div className="w-[20rem] my-3 mx-5 shadow-lg shadow-gray-200 hover:shadow-xl hover:shadow-gray-300  rounded-b-3xl bg-white">
      <div>
        <img src={img} alt={alt} className=" object-cover" />
      </div>
      <div className="px-7 pt-4 pb-7">
        <div className="flex w-full justify-between mb-3">
          <p className="text-[#5E6282] text-[18px] font-[500] leading-[124.5%]">
            {name}
          </p>
          <p className="text-[#5E6282] text-[18px] font-[500] leading-[124.5%]">
            {price}
          </p>
        </div>
        <div className="flex">
          <img src={sendIcon} alt="Send Icon" className="mr-3" />
          <p className="text-[#5E6282] text-[16px] font-[500] leading-[124.5%]">
            {duration}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationItem;

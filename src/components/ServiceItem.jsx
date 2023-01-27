import React from "react";

const ServiceItem = ({ title, body, img, alt }) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center px-8 py-10 sm:py-5 rounded-[36px] text-center  shadow-lg shadow-gray-200 hover:shadow-lg hover:shadow-gray-400 sm:mx-5 my-7 hover:cursor-pointer">
      <div className="w-full flex justify-center">
        <img src={img} alt={alt} className="w-12" />
      </div>
      <h2 className="my-3 text-[#1E1D4C] text-[20px] font-[600] leading-[27px] ">
        {title}
      </h2>
      <p className="text-[#5E6282] text-[16px] font-[500] leading-[26px]">
        {body}
      </p>
    </div>
  );
};

export default ServiceItem;

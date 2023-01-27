import React from "react";

const FooterLink = ({ title, list }) => {
  return (
    <div className="mb-5 sm:mb-0">
      <h1 className="text-[#080809] text-[21px] font-[700] leading-[124.5%] mb-3">
        {title}
      </h1>
      {list.map((item, index) => (
        <p
          className="text-[#5E6282] text-[18px] font-500 leading-[124.5%] py-1 hover:cursor-pointer hover:text-[#272a42] hover:font-medium"
          key={index}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default FooterLink;

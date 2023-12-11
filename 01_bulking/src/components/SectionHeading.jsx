import React from "react";
const SectionHeading = ({ heading, title }) => (
  <div className="text-center mb-12">
    <h5 className="font-sans text-xs sm:text-sm font-medium text-mainColor py-2 px-4 mb-4 border border-solid border-[#E9EBED] rounded-[20px] inline-flex">
      {heading}
    </h5>
    <h2 className="font-sans text-3xl sm:text-[40px] sm:leading-[48px] font-medium tracking-[.2px] max-w-xs">
      {title}
    </h2>
  </div>
);
export default SectionHeading;

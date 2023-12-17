import React from "react";
import styles from "../styles";
const SectionHeading = ({ heading, title, maxWidth, align }) => (
  <div className={`${align ? align : "text-center"} mb-12 sm:px-0`}>
    <h5 className="font-sans text-xs sm:text-sm font-medium text-mainColor py-2 px-4 mb-4 border border-solid border-[#E9EBED] rounded-[20px] inline-flex">
      {heading}
    </h5>
    <h2 className={`${styles.heading} ${maxWidth}`}>{title}</h2>
  </div>
);
export default SectionHeading;

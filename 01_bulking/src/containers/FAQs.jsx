import React, { useState } from "react";
import { Minus, Plus } from "../assets";
import styles from "../styles";
const FAQs = ({ question, answer, index }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <div
      className={`faq-item mb-3 ${activeIndex === index ? "active" : ""}`}
      onClick={() => handleClick(index)}
    >
      <div className="flex justify-between items-start cursor-pointer">
        <h4 className="font-sans text-xs sm:text-lg tracking-[.1px] text-primary font-semibold pb-4 pr-4 sm:pr-0">
          {question}
        </h4>
        <img
          src={activeIndex === index ? Minus : Plus}
          alt="Icon"
          className="sm:w-[24px] w-[16px]"
        />
      </div>
      {activeIndex === index && (
        <p className={`${styles.paragraph} text-xs sm:text-sm max-w-xl`}>
          {answer}
        </p>
      )}
    </div>
  );
};
export default FAQs;

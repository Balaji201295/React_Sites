import React, { useState } from "react";
import { Faqs } from "../constants";
import { PageHeading } from "../components";
import { Minus, Plus } from "../assets";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import styles from "../styles";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className={`${styles.padding} max-w-4xl mx-auto`}>
      <PageHeading
        title="FAQs"
        content="Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada."
        align="text-center"
        margin="mx-auto"
      />
      <div>
        <h5 className="text-primary font-sans text-xl sm:text-2xl font-semibold tracking-[.12px] mb-16">
          Maybe your question has been answered, check this out!
        </h5>
        <div className="flex flex-col">
          {Faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item mb-3 ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <div className="flex justify-between items-start cursor-pointer">
                <h4 className="font-sans text-xs sm:text-lg tracking-[.1px] text-primary font-semibold pb-4 pr-4 sm:pr-0">
                  {item.question}
                </h4>
                <img
                  src={activeIndex === index ? Minus : Plus}
                  alt="Icon"
                  className="sm:w-[24px] w-[16px]"
                />
              </div>
              {activeIndex === index && (
                <p
                  className={`${styles.paragraph} text-xs sm:text-sm max-w-xl`}
                >
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Faq;

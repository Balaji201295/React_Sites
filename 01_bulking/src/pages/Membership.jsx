import React from "react";
import {
  Reviews,
  MembershipItems,
  SectionHeading,
  Overview,
} from "../components";
import { CheckMark, CheckMarkLight } from "../assets";
import { plans } from "../constants";
import styles from "../styles";

const Membership = () => {
  const renderMembershipItems = () => {
    return plans.map((plan, index) => {
      const { price, planType, content } = plan;
      const isEven = index % 2 === 1;

      const columnClasses = `p-10 ${isEven ? "bg-blue-500" : "bg-white"}`;
      const textClasses = `${isEven ? "text-white" : "text-primary"}`;
      const spanClasses = `${isEven ? "text-[#C7C7CC]" : "text-[#AEAEB2]"}`;
      const contentClasses = `${isEven ? "text-[#F2F2F7]" : "text-[#3A3A3C]"}`;
      const planTypeClasses = `${isEven ? "text-white" : "text-[#064BB4]"}`;
      const imgUrl = `${isEven ? CheckMarkLight : CheckMark}`;

      return (
        <MembershipItems
          key={index}
          price={price}
          planType={planType}
          content={content}
          columnClasses={columnClasses}
          textClasses={textClasses}
          spanClasses={spanClasses}
          contentClasses={contentClasses}
          planTypeClasses={planTypeClasses}
          imgUrl={imgUrl}
        />
      );
    });
  };

  return (
    <main
      className={`${styles.paddingX} bg-[#F9F9FB] flex flex-col justify-center items-center pt-16`}
    >
      <SectionHeading
        heading="Membership"
        title="Compare Our Plane and Find Your"
        maxWidth="max-w-lg"
      />
      <div className="flex flex-wrap justify-center gap-10 py-12">
        {renderMembershipItems()}
      </div>
      <Overview />
      <Reviews />
    </main>
  );
};

export default Membership;

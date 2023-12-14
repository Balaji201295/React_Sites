import React from "react";
import { CTA, Reviews, MembershipItems } from "../components";
import { CheckMark, CheckMarkColor } from "../assets";
import { plans } from "../constants";
import styles from "../styles";
const Home = () => {
  const renderMembershipItems = () => {
    return plans.map((plan, index) => {
      const { price, planType, content } = plan;
      const isEven = index % 2 === 1;

      const columnClasses = `p-10 ${isEven ? "bg-blue-500" : "bg-white"}`;
      const textClasses = `${isEven ? "text-white" : "text-primary"}`;
      const spanClasses = `${isEven ? "text-[#C7C7CC]" : "text-[#AEAEB2]"}`;
      const planTypeClasses = `${isEven ? "text-white" : "text-[#064BB4]"}`;
      const imgUrl = `${isEven ? CheckMarkColor : CheckMark}`;

      return (
        <MembershipItems
          key={index}
          price={price}
          planType={planType}
          content={content}
          plan={plan}
          columnClasses={columnClasses}
          textClasses={textClasses}
          spanClasses={spanClasses}
          planTypeClasses={planTypeClasses}
          imgUrl={imgUrl}
        />
      );
    });
  };
  return (
    <main className={`bg-[#F9F9FB]`}>
      <Reviews />
      <div className="flex flex-wrap justify-center gap-10 py-12">
        {renderMembershipItems()}
      </div>
      <CTA />
    </main>
  );
};
export default Home;

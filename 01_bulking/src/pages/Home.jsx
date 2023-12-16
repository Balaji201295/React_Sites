import React from "react";
import {
  CTA,
  Reviews,
  MembershipItems,
  SectionHeading,
  Button,
} from "../components";
import { CheckMark, CheckMarkLight } from "../assets";
import { plans, sessions } from "../constants";
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
      const imgUrl = `${isEven ? CheckMarkLight : CheckMark}`;

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
    <main>
      <div
        className={`flex flex-col justify-center items-center py-16 sm:py-32 ${styles.paddingX}`}
      >
        <h1 className="font-sans text-primary capitalize font-medium tracking-[.24px] text-3xl sm:text-4xl max-w-lg text-center pb-16">
          We offer something for everybody
        </h1>
        <div>
          {sessions.map((session, index) => {
            const { icon, title, imgUrl } = session;
            return (
              <div
                key={index}
                className={`flex items-center gap-12 flex-col-reverse sm:flex-row ${
                  index !== sessions.length - 1 ? "mb-12 sm:mb-24" : ""
                } even:flex-col-reverse sm:even:flex-row-reverse`}
              >
                <div className="flex-[.8] flex flex-col items-start p-6 bg-white rounded-[20px]">
                  <img src={icon} alt="Icon" className="w-12 h-12" />
                  <h3 className="font-sans text-primary capitalize font-medium tracking-[.16px] text-xl md:text-3xl pt-2 pb-4 md:pb-6">
                    {title}
                  </h3>
                  {session.points.map((item, index) => (
                    <div
                      key={index}
                      className={`flex gap-3 items-center ${
                        index !== session.points.length - 1
                          ? " mb-4 md:mb-6"
                          : ""
                      }`}
                    >
                      <img src={CheckMark} alt="Check" className="w-9 h-9" />
                      <p>{item}</p>
                    </div>
                  ))}
                  <div className="w-[80%] h-[1px] bg-[#E9EBED] my-6 md:my-10"></div>
                  <Button
                    text="Join Now"
                    width="w-[150px]"
                    height="h-[56px]"
                    bgColor="bg-[#BCFF5E]"
                  />
                </div>
                <div className="flex-1">
                  <img src={imgUrl} alt="Image" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <SectionHeading
        heading="Membership"
        title="Crushing your health and fitness goals starts here..."
        maxWidth="max-w-[772px] mx-auto"
      />
      <div className="flex flex-wrap justify-center gap-10 py-12">
        {renderMembershipItems()}
      </div>
      <Reviews />
      <CTA />
    </main>
  );
};
export default Home;

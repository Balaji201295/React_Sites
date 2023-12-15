import React from "react";
import { Button } from "../components";
import { Link } from "react-router-dom";
import styles from "../styles";

const MembershipItems = ({
  price,
  planType,
  content,
  plan,
  columnClasses,
  textClasses,
  spanClasses,
  contentClasses,
  planTypeClasses,
  imgUrl,
}) => {
  const formattedPrice = price > 10 ? `${price}.00` : `${price}`;

  return (
    <Link
      to={planType === "Basic Plan" ? "/membership-details" : ""}
      className={
        planType === "Basic Plan" ? "cursor-pointer" : "cursor-default"
      }
    >
      <div className={`${columnClasses} rounded-3xl`}>
        <h3
          className={`font-sans text-3xl sm:text-4xl font-semibold tracking-[.2px] pb-4 ${textClasses}`}
        >
          ${formattedPrice}
          <span
            className={`${spanClasses} text-sm sm:text-base font-normal tracking-[.08px]`}
          >
            /Month
          </span>
        </h3>
        <p
          className={`${planTypeClasses} font-sans text-base sm:text-xl font-medium tracking-[.01px] pb-8`}
        >
          {planType}
        </p>
        {contentClasses && (
          <p
            className={`${contentClasses} font-sans font-normal text-[12px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.08px] pb-6 max-w-[240px]`}
          >
            {content}
          </p>
        )}
        {plan && (
          <div className="flex flex-col gap-6 pb-8">
            {plan.points.map((point, index) => (
              <div key={index} className="flex gap-3">
                <img src={imgUrl} alt="Mark" className="w-7 h-7" />
                <p className={`${styles.paragraph} ${textClasses}`}>{point}</p>
              </div>
            ))}
          </div>
        )}

        <Link to="/payment">
          <Button
            type="button"
            text="Purchase Plan"
            width="w-full"
            height="h-[46px]"
            bgColor="bg-[#BCFF5E]"
          />
        </Link>
      </div>
    </Link>
  );
};

export default MembershipItems;

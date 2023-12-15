import React from "react";
import { useState } from "react";
import {
  Reviews,
  PageHeading,
  Button,
  PersonalTrainingInfo,
} from "../components";
import styles from "../styles";
import { packageDetails } from "../constants";
import { CheckMark } from "../assets";
import { MdArrowDropDown } from "react-icons/md";
const MembershipDetails = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const prices = {
    option1: 149.0,
    option2: 129.0 * 6,
    option3: 99.0 * 12,
  };

  const getFormattedPrice = () => {
    const price = prices[selectedOption] || 149.0;
    const duration =
      selectedOption === "option1"
        ? "Month"
        : selectedOption === "option2"
        ? "Months"
        : "Year";

    return (
      <h3 className="font-sans text-[#09080D] font-medium text-3xl sm:text-4xl tracking-[.2px]">
        ${price}
        <span className="text-[#8E8E93] text-sm">/{duration}</span>
      </h3>
    );
  };

  return (
    <main className={styles.padding}>
      <PageHeading
        title="Basic"
        titleSpan="Plan"
        content="It’s a long established fact that a reader will be distracted by the readable content"
      />
      <div className={`flex md:flex-row flex-col-reverse sm:gap-10 lg:gap-20`}>
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-wrap gap-6">
            <PersonalTrainingInfo />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-primary text-2xl font-semibold tracking-[.12px] ">
              About the plan
            </h3>
            <p className={`${styles.paragraph} pb-4`}>
              Diam ante tortor diam mauris. Feugiat fames in et neque. Sem
              mollis sagittis id bibendum vitae magna risus. Feugiat adipiscing
              gravida bibendum adipiscing vel fermentum potenti. Mus ipsum
              consequat morbi aenean orci mauris integer eu. Purus accumsan non
              a ut aliquet volutpat leo. At vitae porttitor blandit porta.
              Pretium sed tempor vestibulum sit urna. Potenti purus sodales in
              enim nunc. In et auctor fusce sit donec condimentum. Diam ultrices
              enim nunc ornare id aliquet sed arcu commodo. Aliquam morbi
              fermentum amet dui ullamcorper praesent elit. Viverra nam massa
              cursus leo blandit eget eu. Tempor enim neque metus nunc sodales
              at eros. Malesuada placerat vestibulum amet sit tempor mi
              dignissim. Feugiat nullam urna gravida vulputate mi eleifend
              laoreet. Nunc facilisis egestas faucibus eget suspendisse. In id
              pulvinar sem lectus lectus eu. Aliquam elementum semper faucibus
              volutpat facilisis mi.
            </p>
            <h3 className="font-sans text-primary text-2xl font-semibold tracking-[.12px] ">
              Is this the right package for me?
            </h3>
            <p className={`${styles.paragraph}`}>
              Consectetur adipiscing elit. Odio amet egestas dignissim eu nunc.
              Id pulvinar enim volutpat tellus. Cras tellus ac dui at sed.
            </p>
            <p className={`${styles.paragraph}`}>
              Viverra urna imperdiet non malesuada. In massa id tellus natoque
              augue in et, et. Suspendisse feugiat scelerisque et, viverra urna
              imperdiet.Vitae interdum quis lacus ut viverra.
            </p>
            <ol className={`${styles.paragraph} list-decimal list-inside`}>
              <li>
                Enim eu turpis egestas pretium aenean pharetra magna ac
                placerat.
              </li>
              <li>Nunc semper velit netus donec commodo.</li>
              <li>
                Lacus hendrerit aliquam habitant eget faucibus venenatis turpis
              </li>
            </ol>
          </div>
        </div>
        <div className="flex-[.5]">
          <div className="bg-white rounded-[20px] p-6">
            <h3 className="font-sans text-primary text-lg font-semibold tracking-[.09px] pb-2">
              Get your package
            </h3>
            <div className="flex flex-col gap-6">
              <p className={`${styles.paragraph}`}>
                Suspendisse feugiat scelerisque et, viverra urna imperdiet non
                malesuada.
              </p>
              <div className="flex flex-col gap-5">
                <p
                  className={`font-sans text-base font-medium text-primary tracking-tighter-[.08px] `}
                >
                  What’s Includes:
                </p>
                {packageDetails.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 justify-start items-center"
                  >
                    <img src={CheckMark} alt="Check" className="w-7 h-7" />
                    <p className="font-sans text-[#09080D] font-medium text-sm sm:text-base tracking-[.08px]">
                      {item.label}
                    </p>
                  </div>
                ))}
                <form className="flex flex-col gap-4">
                  <label
                    htmlFor="dropdown"
                    className="font-sans text-sm capitalize font-medium text-primary tracking-[.07px]"
                  >
                    Package Duration
                  </label>
                  <div className="custom-select relative">
                    <select
                      id="dropdown"
                      className="w-full p-4 font-sans text-sm tracking-[.08px] text-primary bg-white rounded-3xl border border-solid border-[#E9EBED] outline-none placeholder:text-[#AEAEB2]"
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                    >
                      <option value="option1">1 Month</option>
                      <option value="option2">6 Months</option>
                      <option value="option3">1 Year</option>
                    </select>
                    {/* Custom arrow */}
                    <MdArrowDropDown
                      fontSize={24}
                      id="arrowIcon"
                      className={`absolute top-4 right-4`}
                    />
                  </div>
                </form>
                {getFormattedPrice()}
                <div className="flex flex-col justify-center items-center gap-6">
                  <Button
                    type="button"
                    text="Purchase Now"
                    width="w-full"
                    height="h-[56px]"
                    bgColor="bg-primary"
                  />
                  <Button
                    type="button"
                    text="Add to Cart"
                    width="w-full"
                    height="h-[56px]"
                    bgColor="bg-transparent hover:bg-[#1C1C1E]"
                    textColor="text-primary hover:text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
    </main>
  );
};

export default MembershipDetails;

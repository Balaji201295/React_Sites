import React from "react";
import { Link } from "react-router-dom";
import { programs } from "../constants";
import { ArrowRight } from "../assets";
import styles from "../styles";
const ProgramItems = () => {
  const renderPrograms = () =>
    programs.map(({ icon, title, content }, index) => {
      const isEven = index % 2 === 1;
      const isFirstColumn = index === 0;
      const isThirdColumn = index === 2;
      const borderRadiusClasses = `${
        isFirstColumn
          ? "lg:rounded-tl-3xl lg:rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl sm:rounded-none"
          : ""
      } ${
        isThirdColumn
          ? "lg:rounded-tr-3xl lg:rounded-br-3xl rounded-bl-3xl rounded-br-3xl sm:rounded-none"
          : ""
      }`;
      const columnClasses = `flex-1 flex flex-col w-full sm:max-w-[291px] p-6 gap-6 ${borderRadiusClasses} ${
        isEven ? "bg-primary" : "bg-white"
      }`;

      return (
        <div key={index} className={columnClasses}>
          <Link
            to={title === "Personal Training" ? "/program-details" : ""}
            className={
              title === "Personal Training"
                ? "cursor-pointer"
                : "cursor-default"
            }
          >
            <img src={icon} alt={title} className="w-12 h-12" />
            <div className="flex flex-col gap-3">
              <h3 className="font-sans text-primary text-xl font-semibold tracking-[.01px]">
                {title}
              </h3>
              <p className={styles.paragraph}>{content}</p>
            </div>
          </Link>
          <div className="flex items-center font-sans text-primary text-sm font-semibold tracking-[.01px]">
            <a href="#" className="flex">
              Learn More&nbsp;
              <img src={ArrowRight} alt="Learn More" />
            </a>
          </div>
        </div>
      );
    });
  return <>{renderPrograms()}</>;
};
export default ProgramItems;

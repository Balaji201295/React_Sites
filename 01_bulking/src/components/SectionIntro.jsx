import React from "react";
import styles from "../styles";
const SectionIntro = ({ title, content, maxWidth }) => (
  <div className="mb-14 sm:mb-12 text-center">
    <h1
      className={`font-sans font-semibold text-3xl sm:text-5xl text-black mb-4 `}
    >
      {title}
    </h1>
    <p
      className={`${styles.paragraph} ${
        maxWidth ? maxWidth : "max-w-md"
      } mx-auto`}
    >
      {content}
    </p>
  </div>
);
export default SectionIntro;

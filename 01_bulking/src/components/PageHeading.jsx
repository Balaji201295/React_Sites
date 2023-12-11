import React from "react";
import styles from "../styles";
const PageHeading = ({ title, titleSpan, updateDetails }) => (
  <div className="mb-8 sm:mb-12">
    <h1 className={`${styles.pageHeading}`}>
      {title}&nbsp;<span className="font-normal">{titleSpan}</span>
    </h1>
    <p className={`${styles.paragraph} max-w-md`}>{updateDetails}</p>
  </div>
);
export default PageHeading;

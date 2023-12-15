import React from "react";
import styles from "../styles";
const PageHeading = ({
  title,
  titleSpan,
  content,
  align,
  margin,
  maxWidth,
  fontStyle,
}) => (
  <div className="mb-8 sm:mb-12">
    <h1 className={`${styles.pageHeading} ${align} ${fontStyle}`}>
      {title}&nbsp;<span className="font-normal">{titleSpan}</span>
    </h1>
    <p
      className={`${styles.paragraph}  ${margin} ${align} ${
        maxWidth ? maxWidth : "max-w-md"
      }`}
    >
      {content}
    </p>
  </div>
);
export default PageHeading;

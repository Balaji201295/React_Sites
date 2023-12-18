import React from "react";
import { CoreWorks, Hero, Reviews } from "../containers";

import styles from "../styles";
const AboutUs = () => {
  return (
    <main>
      <Hero />
      <div
        className={`flex flex-col justify-center items-center py-16 sm:py-32 ${styles.paddingX}`}
      >
        <CoreWorks />
      </div>
      <Reviews />
    </main>
  );
};
export default AboutUs;

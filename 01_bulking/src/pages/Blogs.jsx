import React from "react";
import { CTA, SectionHeading, BlogPage } from "../components";
import styles from "../styles";

const Blogs = () => {
  return (
    <main>
      <div className={`${styles.padding}`}>
        <SectionHeading
          heading="Resource Center"
          title="Featured News"
          align="text-left"
        />

        <BlogPage />
      </div>
      <CTA />
    </main>
  );
};

export default Blogs;

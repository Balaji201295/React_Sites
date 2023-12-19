import React from "react";
import { CTA, Reviews, Sidebar } from "../containers";
import { NotFound } from "../components";
import { useLoaderData } from "react-router-dom";
import styles from "../styles";
const SingleBlog = () => {
  const data = useLoaderData();
  // Check if data is empty or null
  if (!data || Object.keys(data).length === 0) {
    return <NotFound />;
  }
  const { image, category, title, published_date, content } = data;
  // console.log(data);
  return (
    <main>
      <div className={`${styles.padding} flex flex-col md:flex-row gap-12`}>
        {/* blog details */}
        <div className=" flex-1 px-4 max-w-6xl mx-auto my-12 flex flex-col lg:flex-row gap-8">
          <div>
            <p className="font-sans font-medium text-sm text-white py-2 px-3 bg-[#064BB4] rounded-[20px] inline-block">
              {category}
            </p>
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl mt-8 font-semibold mb-4 text-primary">
              {title}
            </h2>
            <p className="font-sans font-medium text-sm text-secondary pb-6">
              {published_date}
            </p>

            <img src={image} alt={title} className="w-full mx-auto rounded" />

            <div className="text-base text-gray-500 pt-6">
              <p>{content}</p>
            </div>
          </div>
        </div>
        <div className="flex-[.5]">
          <Sidebar />
        </div>
      </div>
      <Reviews />
      <CTA />
    </main>
  );
};
export default SingleBlog;

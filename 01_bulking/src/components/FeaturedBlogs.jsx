import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "../assets";
import styles from "../styles";
const FeaturedBlogs = ({ blogs }) => {
  const [readMore, setReadMore] = useState(false);
  const [featuredBlogs, setFeaturedBlogs] = useState([]); // blog content

  // fetch api
  useEffect(() => {
    const fetchBlogs = async () => {
      let url = `http://localhost:5000/blogs`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFeaturedBlogs(data);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error:${err.message}`);
        }
      }
    };
    fetchBlogs();
  }, [featuredBlogs]);
  return (
    <div className="flex flex-col md:flex-row gap-6 sm:gap-16">
      <div className="flex-1">
        {featuredBlogs.slice(0, 1).map((blog, index) => {
          const { image, category, published_date, title, content } = blog;
          return (
            <div key={index}>
              <img src={image} alt="Blog Image" className="w-[100%] h-[100%]" />
              <div className="flex justify-between items-center py-4">
                <h5 className="font-sans font-semibold text-sm tracking-[.07px] text-mainColor py-2 px-4 border border-solid border-[#E9EBED] rounded-[20px]">
                  {category}
                </h5>
                <p className={styles.paragraph}>Published: {published_date}</p>
              </div>
              <h3 className="font-sans font-medium text-2xl sm:text-3xl tracking-[.16px] py-4 text-primary">
                {title}
              </h3>
              <p className={styles.paragraph}>
                {readMore ? content : `${content.substring(0, 100)}...`}
              </p>
              <Link to={`/blogs/${blog.id}`} className="flex pt-4">
                Read More&nbsp;
                <img src={ArrowRight} alt="Learn More" />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex-1 flex flex-col gap-6 sm:gap-16">
        {featuredBlogs.slice(3, 6).map((blog, index) => {
          const { image, published_date, title } = blog;
          return (
            <Link key={index} to={`/blogs/${blog.id}`}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <img
                  src={image}
                  alt="Blog Image"
                  className="w-[255px] h-[153px]"
                />
                <div className="flex flex-col justify-center items-start py-6 gap-3">
                  <p
                    className={`font-sans font-normal text-sm text-[#636366] tracking-[.09px]`}
                  >
                    Published: {published_date}
                  </p>
                  <h3 className="font-sans font-semibold text-md text-primary tracking-[.01px]">
                    {title}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default FeaturedBlogs;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles";
import { ArrowRight } from "../assets";
const BlogCards = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const [readMore, setReadMore] = useState(false);
  const filteredBlogs = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
  // console.log(filteredBlogs);
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {filteredBlogs.map((blog) => (
        <div key={blog.id}>
          <div>
            <img src={blog.image} alt={blog.title} className="w-full" />
          </div>
          <div className="flex justify-between items-center py-4">
            <p className="font-sans font-semibold text-xs bg-[#064BB4] rounded-3xl text-white py-2 px-3">
              {blog.category}
            </p>
            <p className="font-sans font-medium text-sm text-secondary">
              {blog.published_date}
            </p>
          </div>
          <h3 className="font-sans font-medium text-lg tracking-[.1px]">
            {blog.title}
          </h3>
          <p className={`${styles.paragraph} text-secondary py-4`}>
            {readMore ? blog.content : `${blog.content.substring(0, 60)}...`}
          </p>
          <Link
            to={`/blogs/${blog.id}`}
            className="flex font-sans font-medium text-sm tracking-[.07px]"
          >
            Read More&nbsp;
            <img src={ArrowRight} alt="Learn More" />
          </Link>
        </div>
      ))}
    </div>
  );
};
export default BlogCards;

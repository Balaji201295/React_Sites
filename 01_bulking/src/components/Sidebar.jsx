import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { socialMedia } from "../constants";
import styles from "../styles";

const Sidebar = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/blogs");
        const data = await response.json();
        const sortedBlogs = data.sort(
          (a, b) => new Date(b.published_date) - new Date(a.published_date)
        );
        setLatestBlogs(sortedBlogs);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className={styles.paddingY}>
      <div className="flex gap-[10px] justify-center sm:justify-end">
        {socialMedia.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            className="w-10 h-10 flex justify-center items-center border border-solid border-[#E9EBED] rounded-[20px] text-primary transition-all duration-300 ease-linear hover:bg-primary hover:text-[#08172D]"
          >
            <item.icon className="w-[14px] h-[14px]" />
          </a>
        ))}
      </div>
      <div className="flex flex-col p-6 border border-solid border-[#E9EBED] mt-10 rounded-2xl">
        <h3 className="font-sans font-medium text-2xl tracking-[.12px] pb-8">
          Latest articles
        </h3>
        <div>
          {latestBlogs.slice(0, 2).map((blog, index) => (
            <div key={index}>
              <Link to={`/blogs/${blog.id}`}>
                <h5 className="font-sans font-semibold text-sm tracking-[.07px] text-mainColor py-2 px-4 border border-solid border-[#E9EBED] rounded-[20px] inline-block">
                  {blog.category}
                </h5>
                <h3 className="font-sans font-medium text-lg sm:text-xl tracking-[.16px] py-4 text-primary">
                  {blog.title}
                </h3>
                <p className={styles.paragraph}>
                  Published: {blog.published_date}
                </p>
              </Link>
              {index !== latestBlogs.slice(0, 2).length - 1 && (
                <hr className="border-[#E9EBED] my-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;

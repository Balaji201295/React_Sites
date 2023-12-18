import React, { useState, useEffect } from "react";
import { CategorySelection, Pagination } from "../components";
import { BlogCards, FeaturedBlogs } from "../containers";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]); // blog content
  const [currentPage, setCurrentPage] = useState(1); // pagination number
  const pageSize = 6; // blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null); //category
  const [activeCategory, setActiveCategory] = useState(null); // active category

  // fetch api
  useEffect(() => {
    const fetchBlogs = async () => {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
      try {
        if (selectedCategory) {
          url += `&category=${selectedCategory}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setBlogs(data);
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
  }, [currentPage, pageSize, selectedCategory]);

  // current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // category changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };
  return (
    <div>
      {/* featured blogs */}
      <FeaturedBlogs blogs={blogs} />
      {/* category section*/}

      <div>
        <CategorySelection
          blogs={blogs}
          handleCategoryChange={handleCategoryChange}
          activeCategory={activeCategory}
        />
      </div>

      {/* blog cards components */}
      <div className="flex flex-col lg:flex-row gap-8">
        <BlogCards
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />
      </div>

      {/* pagination */}
      <div className="my-8">
        <Pagination
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          blogs={blogs}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};
export default BlogPage;

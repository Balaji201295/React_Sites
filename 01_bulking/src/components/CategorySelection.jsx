import React from "react";

const CategorySelection = ({ handleCategoryChange, activeCategory }) => {
  const categories = ["Fitness", "Health", "Recipes"];
  // const categories = [...new Set(blogs.map((blog) => blog.category))];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full my-12 gap-6">
      <h3 className="font-sans font-semibold text-2xl sm:text-3xl tracking-[.16px] text-primary">
        Topic Match For You
      </h3>
      <div
        className={`
         flex flex-wrap justify-center gap-4 sm:gap-8 items-center font-semibold`}
      >
        <button
          onClick={() => handleCategoryChange(null)}
          className={` font-sans text-primary text-sm font-medium tracking-[.07px] min-w-[75px] ${
            activeCategory === null ? "bg-primary rounded-3xl py-2 px-3" : ""
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`font-sans text-primary text-sm font-medium tracking-[.07px] min-w-[75px] ${
              activeCategory === category
                ? "bg-primary rounded-3xl py-2 px-3"
                : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;

import React from "react";
const Pagination = ({ handlePageChange, currentPage, blogs, pageSize }) => {
  const totalPages = Math.ceil(blogs.length / pageSize); // 86/12 blogs per page = 8 pages
  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, index) => index + 1).map(
      (pageNumber) => (
        <li
          key={pageNumber}
          className={`mx-1 sm:mx-2 ${
            pageNumber === currentPage ? "activePagination" : ""
          }`}
        >
          <a
            href="#"
            className="font-sans font-medium text-sm block px-2 py-1 sm:px-3 sm:py-2 border border-solid border-[#ccc] rounded-[4px] text-black hover:bg-[#eee]"
            onClick={() => {
              handlePageChange(pageNumber);
            }}
          >
            {pageNumber}
          </a>
        </li>
      )
    );
  };
  // console.log(totalPages);
  return (
    <ul className="flex-col sm:flex-row flex-wrap my-8 gap-4 pagination">
      <li>
        <button
          type="button"
          className="font-sans font-medium text-sm"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>
      <div className="flex gap-1">{renderPaginationLinks()}</div>
      <li>
        <button
          type="button"
          className="font-sans font-medium text-sm"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
};
export default Pagination;

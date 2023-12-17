import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <main
      id="error-page"
      className="w-full bg-Light text-white min-h-screen flex justify-center items-center"
    >
      <div className="sm:mx-auto mx-6 bg-secondary sm:p-24 p-8 shadow-lg font-sans">
        <h1 className="font-sans text-4xl font-bold mb-4">Oops!</h1>

        <p className="mb-8">The blog does not exist or the ID is invalid.</p>
        <Link to="/blogs">
          Please&nbsp;
          <span className="underline underline-offset-4 font-semibold">
            Click here
          </span>
          &nbsp;to go Blog page.
        </Link>
      </div>
    </main>
  );
};
export default NotFound;

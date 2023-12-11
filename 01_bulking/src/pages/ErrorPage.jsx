import React from "react";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  // console.error(error);
  return (
    <main
      id="error-page"
      className="w-full bg-Light text-white min-h-screen flex justify-center items-center"
    >
      <div className="sm:mx-auto mx-6 bg-secondary sm:p-24 p-8 shadow-lg font-sans">
        <h1 className="font-sans text-4xl font-bold mb-4">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="mb-8">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          Please&nbsp;
          <span className="underline underline-offset-4 font-semibold">
            Click here
          </span>
          &nbsp;to go Home page.
        </Link>
      </div>
    </main>
  );
};
export default ErrorPage;

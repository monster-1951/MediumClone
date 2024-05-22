import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="font-serif flex flex-col justify-center">
      <div className="h-96 p-3 flex flex-col justify-around sm:justify-evenly">
        <p className="sm:text-5xl text-3xl">
          This page is under develepment.
        </p>
        <p className="text-xl sm:text-2xl">
          You can explore other sections from the above navigation bar
        </p>
        <p className="shadow-2xl">
          If you have any queries,
          <Link
            to={"mailto:shivashankarsince19@gmail.com"}
            className="underline underline-offset-2"
          >
            Mail us
          </Link>
        </p>
        <Link to={"/MediumClone/"}>
          <button className="border-2 border-green-700 p-3 rounded-3xl text-green-700 font-bold">
            Go to home page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

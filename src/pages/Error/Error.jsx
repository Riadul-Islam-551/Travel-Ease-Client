import React from "react";
import { Link } from "react-router";
import error from "../../assets/error.png"

const Error = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col justify-center items-center text-center px-6">
      {/* --- Illustration or Image --- */}
      <img
        src={error}
        alt="Page not found"
        className="w-64 md:w-80 mb-8"
      />

      {/* --- Heading --- */}
      <h1 className="text-5xl font-bold text-secondary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-text mb-3">
        Oops! The page you’re looking for isn’t here.
      </h2>

      {/* --- Description --- */}
      <p className=" max-w-md mb-8">
        It seems you’ve taken a wrong turn. Don’t worry — travel back to the
        homepage and keep exploring our vehicles.
      </p>

      {/* --- Back to Home Button --- */}
      <Link to="/" className="btn btn-secondary px-8">
        Go Back Home
      </Link>

      {/* --- Small Decorative Note --- */}
      <p className="mt-8 text-sm text-gray-400 italic">
        TravelEase – Making every journey smoother.
      </p>
    </div>
  );
};

export default Error;

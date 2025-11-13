import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-100 text-center px-6">
      {/* --- Logo / Brand Name --- */}
      <h1 className="text-3xl font-bold text-primary mb-8">TravelEase</h1>

      {/* --- Spinner --- */}
      <span className="loading loading-spinner loading-lg text-primary mb-6"></span>

      {/* --- Loading Text --- */}
      <p className="text-text-secondary text-lg animate-pulse">
        Preparing your travel experience...
      </p>
    </div>
  );
};

export default Loading;

import React from "react";
import banner from "../../assets/banner.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div
      className="hero min-h-[700px]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1671982105619-16a2fd2f2d57?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-primary">TravelEase</h1>
          <p className="mb-5 font-bold text-white">
            Vehicle Booking & Trip Management Platform
          </p>
          <Link to="/vehicles" className="btn btn-secondary">All Vehicles</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

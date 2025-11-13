import React from "react";
import about from "../../assets/about.jpg";
import { Link } from "react-router";

const AboutCompany = () => {
  return (
    <div>
      {" "}
      <div className="hero max-w-[1200px] bg-[#eef6ff] my-12 md:p-12 rounded-2xl mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={about} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold text-primary mb-6">
              About TravelEase
            </h1>
            <p className="py-2">
              TravelEase is your trusted platform for booking vehicles
              effortlessly. Whether you’re planning a business trip, a family
              vacation, or a weekend getaway — we make traveling simple,
              reliable, and affordable.
            </p>
            <p className="text-sm text-base-200">
              Manage your own vehicles, browse available rides, and connect
              directly with verified owners — all in one place.
            </p>
            <Link to="/vehicles" className="btn btn-primary mt-12">
              See All Vehicles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;

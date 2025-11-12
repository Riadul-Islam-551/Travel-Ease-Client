import React from "react";
import about from "../../assets/about.jpg";
import { Link } from "react-router";

const AboutCompany = () => {
  return (
    <div>
      {" "}
      <div className="hero max-w-[1200px] bg-[#eef6ff] my-12 p-12 rounded-2xl mx-auto">
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
      .......
      {/* <section className="bg-base-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              About TravelEase
            </h2>
            <p className="text-text mb-6 text-lg leading-relaxed">
              TravelEase is your all-in-one platform for vehicle booking and
              trip management. Whether you’re planning a city ride, a family
              tour, or a business trip — TravelEase connects travelers with
              verified vehicle owners for a smooth, reliable, and affordable
              journey.
            </p>

            <p className="text-text-secondary mb-8">
              <strong>Our Mission:</strong> To simplify how people travel by
              making transportation booking transparent, accessible, and secure.
              We aim to bridge the gap between vehicle owners and travelers
              using modern web technology.
            </p>

            <ul className="space-y-3 text-text">
              <li>
                🔒 <strong>Secure & Trusted</strong> — Only verified users and
                vehicle owners
              </li>
              <li>
                ⚡ <strong>Instant Booking</strong> — Book vehicles in seconds
                with real-time updates
              </li>
              <li>
                💰 <strong>Affordable Rides</strong> — Transparent pricing, no
                hidden fees
              </li>
              <li>
                🧭 <strong>Smart Management</strong> — Manage your vehicles and
                trips easily
              </li>
              <li>
                🌍 <strong>Eco-Friendly Options</strong> — Choose from electric
                and hybrid vehicles
              </li>
            </ul>

            <p className="text-text mt-8 italic">
              At TravelEase, we believe travel should be as simple as clicking a
              button. Let’s make your next journey easier, smarter, and more
              comfortable.
            </p>
          </div>

         
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/dm2ZrVt/travelers-car.jpg"
              alt="TravelEase illustration"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutCompany;

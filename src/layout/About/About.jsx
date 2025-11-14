import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import aboutBanner from "../../assets/about_banner.jpg"

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="bg-base-100 py-20">
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
                <strong>Secure & Trusted</strong> — Only verified users and
                vehicle owners
              </li>
              <li>
                <strong>Instant Booking</strong> — Book vehicles in seconds
                with real-time updates
              </li>
              <li>
                <strong>Affordable Rides</strong> — Transparent pricing, no
                hidden fees
              </li>
              <li>
                <strong>Smart Management</strong> — Manage your vehicles and
                trips easily
              </li>
              <li>
                <strong>Eco-Friendly Options</strong> — Choose from electric
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
              src={aboutBanner}
              alt="TravelEase illustration"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default About;

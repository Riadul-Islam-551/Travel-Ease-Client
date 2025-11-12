import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="text-white bg-black py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* --- Brand Section --- */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-3">TravelEase</h2>
          <p className="text-sm text-base-200 leading-relaxed">
            Simplifying travel and vehicle booking through technology. Book,
            manage, and explore — all in one place.
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-secondary transition text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/vehicles"
                className="hover:text-secondary transition text-sm"
              >
                All Vehicles
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-secondary transition text-sm"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Social Links --- */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary p-2 rounded-full hover:bg-secondary hover:text-white transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary p-2 rounded-full hover:bg-secondary hover:text-white transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary p-2 rounded-full hover:bg-secondary hover:text-white transition"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary p-2 rounded-full hover:bg-secondary hover:text-white transition"
            >
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* --- Divider --- */}
      <div className="mt-8 border-t border-base-100/20 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()}{" "}
        <span className="text-primary font-semibold">TravelEase</span>. All
        rights reserved.
      </div>
    </div>
  );
};

export default Footer;

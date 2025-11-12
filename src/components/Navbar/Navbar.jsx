import React from "react";
import { NavLink } from "react-router";
import "./nav.css";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className="mx-2 p-1 rounded ">
        Home
      </NavLink>
      <NavLink to="/vehicles" className="mx-2 p-1 rounded">
        All vehicles
      </NavLink>
      <NavLink to="/addVehicles" className="mx-2 p-1  rounded">
        Add Vehicles
      </NavLink>
      <NavLink to="/myVehicles" className="mx-2 p-1  rounded">
        My Vehicles
      </NavLink>
      <NavLink to="/booking" className="mx-2 p-1 rounded">
        Bookings
      </NavLink>
      <NavLink to="/register" className="mx-2 p-1  rounded">
        Register
      </NavLink>
    </>
  );
  // Home, All Vehicles, Add Vehicle, My Vehicles, My
  // Bookings, Login/Register
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="font-bold p-1">
            Travel <span className="text-primary">Ease</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

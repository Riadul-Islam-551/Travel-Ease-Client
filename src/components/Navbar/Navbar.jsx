import React, { use } from "react";
import { Link, NavLink, useLocation } from "react-router";
import "./nav.css";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";
import profile from "../../assets/profile.png";

const Navbar = () => {
  const { user, logoutUser } = use(AuthContext);
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

  const handleLogOut = () => {
    logoutUser()
      .then(() => {
        swal("Success!", "You Loged out successfully!", "success");
      })
      .catch((error) => {
        // An error happened.
      });
  };
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
          <div className="mr-2 ">
            <img
              width="40px"
              className="rounded-full"
              src={`${user ? user.photoURL : profile}`}
              alt=""
            />
          </div>
          {user ? (
            <Link
              onClick={handleLogOut}
              to="/"
              className="btn btn-primary shadow-none"
            >
              Sign Out
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary shadow-none">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

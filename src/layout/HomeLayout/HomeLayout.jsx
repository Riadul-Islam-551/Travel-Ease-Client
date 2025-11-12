import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../../pages/Home/Home";
import Banner from "../../components/Banner/Banner";
import HomeVehecle from "../../components/HomeVehecle/HomeVehecle";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>

      <footer></footer>
    </div>
  );
};

export default HomeLayout;

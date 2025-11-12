import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../../pages/Home/Home";
import Banner from "../../components/Banner/Banner";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Banner></Banner>
        <Outlet></Outlet>
      </main>

      <footer></footer>
    </div>
  );
};

export default HomeLayout;

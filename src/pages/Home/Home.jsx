import React from "react";
import Banner from "../../components/Banner/Banner";
import HomeVehecle from "../../components/HomeVehecle/HomeVehecle";
import TopCategory from "../../components/TopCategory/TopCategory"
import AboutCompany from "../../components/AboutCompany/AboutCompany";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeVehecle></HomeVehecle>
      <TopCategory></TopCategory>
      <AboutCompany></AboutCompany>
    </div>
  );
};

export default Home;

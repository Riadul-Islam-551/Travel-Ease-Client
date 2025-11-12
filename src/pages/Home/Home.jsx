import React from "react";
import Banner from "../../components/Banner/Banner";
import HomeVehecle from "../../components/HomeVehecle/HomeVehecle";
import TopCategory from "../../components/TopCategory/TopCategory"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeVehecle></HomeVehecle>
      <TopCategory></TopCategory>
    </div>
  );
};

export default Home;

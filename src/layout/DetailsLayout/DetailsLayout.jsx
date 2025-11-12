import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import DetailsVehicle from "../../components/DetailsVehicle/DetailsVehicle";

const DetailsLayout = () => {

  

  return (
    <div>
      <Navbar></Navbar>
      <main>
        <DetailsVehicle></DetailsVehicle>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default DetailsLayout;

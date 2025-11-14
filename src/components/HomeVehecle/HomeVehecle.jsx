import React, { useState } from "react";
import VehecleCard from "../VehecleCard/VehecleCard";
import { useEffect } from "react";
import axios from "axios";
import useAxios from "../../hooks/useAxios";

const HomeVehecle = () => {
  const [vehecles, setVehecles] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance.get("/vehicles/limit").then((data) => {
      console.log("after axios data", data);
      setVehecles(data.data);
    });
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto py-12 ">
      <h1 className="mb-5 text-3xl font-bold text-primary text-center">
        Order Latest
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto ">
        {vehecles.map((vehecle) => (
          <VehecleCard key={vehecle._id} vehecle={vehecle} />
        ))}
      </div>
    </div>
  );
};

export default HomeVehecle;

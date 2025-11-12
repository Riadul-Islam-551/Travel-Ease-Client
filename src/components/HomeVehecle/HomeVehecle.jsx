import React, { useState } from "react";
import VehecleCard from "../VehecleCard/VehecleCard";
import { useEffect } from "react";

const HomeVehecle = () => {
  const [vehecles, setVehecles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/vehecles/limit")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVehecles(data);
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

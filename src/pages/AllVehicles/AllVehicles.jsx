import React, { useEffect, useState } from "react";
import VehecleCard from "../../components/VehecleCard/VehecleCard";

const AllVehicles = () => {
  const [vehecles, setVehecles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/vehicles")
      .then((res) => res.json())
      .then((data) => {
        setVehecles(data);
      });
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto">
      <section className=" py-12">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Explore All Available Vehicles
          </h1>
          <p className="text-base-200 max-w-2xl mx-auto">
            Browse through our collection of cars, SUVs, vans, and electric
            vehicles. Easily sort or filter by category, location, or price —
            and find your perfect ride for business, travel, or everyday use.
          </p>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto ">
          {vehecles.map((vehecle) => (
            <VehecleCard key={vehecle._id} vehecle={vehecle} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllVehicles;

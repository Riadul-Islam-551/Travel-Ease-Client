import React from "react";
import { FaCarSide, FaChargingStation, FaBus, FaCarAlt } from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Sedan",
    icon: <FaCarAlt />,
    desc: "Comfortable and stylish for city rides.",
  },
  {
    id: 2,
    name: "SUV",
    icon: <FaCarSide />,
    desc: "Spacious and powerful for adventures.",
  },
  {
    id: 3,
    name: "Electric",
    icon: <FaChargingStation />,
    desc: "Eco-friendly and modern choice.",
  },
  {
    id: 4,
    name: "Van",
    icon: <FaBus />,
    desc: "Ideal for families or group travel.",
  },
];

const TopCategory = () => {
  return (
    <div className="max-w-[1200px] mx-auto text-center py-12">
      <h2 className="text-3xl font-bold text-primary mb-6">Top Categories</h2>
      <p className="text-text text-lg mb-10">
        Explore vehicles by popular categories to find the one that fits your
        journey.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="p-6 rounded-xl bg-[#fff0ef] shadow-sm hover:shadow-lg transition"
          >
            <div className="text-5xl text-secondary mb-4 flex justify-center">
              {cat.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-secondary">
              {cat.name}
            </h3>
            <p className="text-base-200 text-sm">{cat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;

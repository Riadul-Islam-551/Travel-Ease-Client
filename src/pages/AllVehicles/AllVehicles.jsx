import React, { useEffect, useState } from "react";
import VehecleCard from "../../components/VehecleCard/VehecleCard";
import useAxios from "../../hooks/useAxios";

const AllVehicles = () => {
  const axiosInstance = useAxios();
  const [vehecles, setVehecles] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("All");
  const bangladeshDistricts = [
    "Bagerhat",
    "Bandarban",
    "Barguna",
    "Barisal",
    "Bhola",
    "Bogura",
    "Brahmanbaria",
    "Chandpur",
    "Chapai Nawabganj",
    "Chattogram",
    "Chuadanga",
    "Cox's Bazar",
    "Cumilla",
    "Dhaka",
    "Dinajpur",
    "Faridpur",
    "Feni",
    "Gaibandha",
    "Gazipur",
    "Gopalganj",
    "Habiganj",
    "Jamalpur",
    "Jashore",
    "Jhalokati",
    "Jhenaidah",
    "Joypurhat",
    "Khagrachhari",
    "Khulna",
    "Kishoreganj",
    "Kurigram",
    "Kushtia",
    "Lakshmipur",
    "Lalmonirhat",
    "Madaripur",
    "Magura",
    "Manikganj",
    "Meherpur",
    "Moulvibazar",
    "Munshiganj",
    "Mymensingh",
    "Naogaon",
    "Narail",
    "Narayanganj",
    "Narsingdi",
    "Natore",
    "Netrokona",
    "Nilphamari",
    "Noakhali",
    "Pabna",
    "Panchagarh",
    "Patuakhali",
    "Pirojpur",
    "Rajbari",
    "Rajshahi",
    "Rangamati",
    "Rangpur",
    "Satkhira",
    "Shariatpur",
    "Sherpur",
    "Sirajganj",
    "Sunamganj",
    "Sylhet",
    "Tangail",
    "Thakurgaon",
  ];

  useEffect(() => {
    axiosInstance
      .get("http://localhost:3000/vehicles")
      .then((data) => {
        setVehecles(data.data);
        setFiltered(data.data);

        const uniqueLocations = [...new Set(data.map((v) => v.location))];
        setLocations(uniqueLocations);
      });
  }, []);

  // Handle filtering by location
  const handleFilter = (district) => {
    setSelectedLocation(district);

    if (district === "All") {
      setFiltered(vehecles);
    } else {
      const filteredData = vehecles.filter(
        (vehicle) => vehicle.location.toLowerCase() === district.toLowerCase()
      );
      setFiltered(filteredData);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto min-h-screen">
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
      {/* filterd section  */}

      <section className="flex justify-between items-center m-6">
        <section>
          <p>Total : {filtered.length}</p>
        </section>
        <select
          className="select select-bordered w-[250px] outline-none"
          value={selectedLocation}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="All" className="">
            All Districts
          </option>

          {bangladeshDistricts.map((district, idx) => (
            <option key={idx} value={district}>
              {district}
            </option>
          ))}
        </select>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto my-12">
          {filtered.map((vehicle) => (
            <VehecleCard key={vehicle._id} vehecle={vehicle} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllVehicles;

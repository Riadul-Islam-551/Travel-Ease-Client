import React, { use, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import MyVehicleCard from "../../components/MyVehicleCard/MyVehicleCard";

const MyVehecles = () => {
  const { user } = use(AuthContext);
  const [bookedUsers, setBookedUser] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/vehicles?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBookedUser(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user?.email]);
  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-3xl text-primary font-bold mt-12 text-center">Your Vehicles</h1>
      <p className="m-4">Total: <span className="font-bold py-1 px-2 rounded bg-accent">{bookedUsers.length}</span></p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto my-12">
        {bookedUsers.map((vehecle) => (
          <MyVehicleCard key={vehecle._id} vehecle={vehecle}></MyVehicleCard>
        ))}
      </div>
    </div>
  );
};

export default MyVehecles;

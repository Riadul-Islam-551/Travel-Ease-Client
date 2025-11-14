import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyVehicleCard from "../../components/MyVehicleCard/MyVehicleCard";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyVehecles = () => {
  const axiosInstance = useAxios();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [bookedUsers, setBookedUser] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosInstance
        .get(`/vehicles?email=${user.email}`)
        .then((data) => setBookedUser(data.data))
        .catch((err) => console.log(err));
    }
  }, [user?.email]);

  const handleDeleteVehecle = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/vehicles/${id}`)
          .then((data) => {
            if (data.data.deletedCount) {
              Swal.fire(
                "Deleted!",
                "Your vehicle has been deleted.",
                "success"
              );
              const remainingVehicles = bookedUsers.filter(
                (vehicle) => vehicle._id !== id
              );
              setBookedUser(remainingVehicles);
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto min-h-screen">
      <h1 className="text-3xl text-primary font-bold mt-12 text-center">
        Your Vehicles
      </h1>
      <p className="m-4">
        Total:{" "}
        <span className="font-bold py-1 px-2 rounded bg-accent">
          {bookedUsers.length}
        </span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto my-12">
        {bookedUsers.map((vehecle) => (
          <MyVehicleCard
            key={vehecle._id}
            vehecle={vehecle}
            handleDeleteVehecle={handleDeleteVehecle}
          />
        ))}
      </div>
    </div>
  );
};

export default MyVehecles;

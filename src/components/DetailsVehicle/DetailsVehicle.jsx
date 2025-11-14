import React, { use } from "react";
import { FaLocationDot, FaUser, FaCarSide } from "react-icons/fa6";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const DetailsVehicle = () => {
  const axiosSecure = useAxiosSecure();
  const data = useLoaderData();
  const { user } = use(AuthContext);
  // console.log(data._id);

  const {
    _id,
    vehicleName,
    owner,
    category,
    pricePerDay,
    location,
    availability,
    description,
    coverImage,
    userEmail,
    createdAt,
  } = data;

  const handleBook = () => {
    const buyer = {
      vehicleID: _id,
      name: user.displayName,
      bookedEmail: user.email,
      photo: user.photoURL,
      vehicle: vehicleName,
      category: category,
    };
    console.log("handle book", buyer);

    axiosSecure
      .post("http://localhost:3000/booked", buyer)
      .then((data) => {
        if (data.data.insertedId) {
          swal("Success!", "You Booked the Vehicle successfully!", "success");
        }
      })
      .catch((err) => {
        swal("Error!", "There is something error", "error");
      });
  };

  return (
    <div className="bg-base-100  py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* --- Vehicle Image --- */}
        <div className="flex justify-center">
          <img
            src={coverImage}
            alt={vehicleName}
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </div>

        {/* --- Vehicle Info --- */}
        <div>
          <h1 className="text-4xl font-bold text-primary mb-4">
            {vehicleName}
          </h1>

          <p className="text-text text-lg mb-3 flex items-center gap-2">
            <FaCarSide className="text-secondary" /> {category}
          </p>

          <p className="text-text mb-3 flex items-center gap-2">
            <FaUser className="text-secondary" /> Owner: {owner}
          </p>

          <p className="text-text mb-3 flex items-center gap-2">
            <FaLocationDot className="text-secondary" /> {location}
          </p>

          <p className="text-text-secondary mb-6 leading-relaxed">
            {description}
          </p>

          <div className="mb-6">
            <span className="text-3xl font-semibold text-secondary">
              ${pricePerDay}
            </span>
            <span className="text-text ml-1">/day</span>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={handleBook} className="btn btn-primary px-6">
              Book Now
            </button>

            <span
              className={`badge ${
                availability === "Available" ? "badge-success" : "badge-error"
              } text-white`}
            >
              {availability}
            </span>
          </div>
        </div>
      </div>

      {/* --- Bottom Extra Info --- */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          About This Vehicle
        </h2>
        <p className="leading-relaxed">
          Listed on <strong>{new Date(createdAt).toDateString()}</strong> by{" "}
          <span className="font-semibold">{owner}</span>. Enjoy smooth driving,
          premium interiors, and a reliable booking experience with{" "}
          <span className="text-primary font-semibold">TravelEase</span>.
        </p>
      </div>
    </div>
  );
};

export default DetailsVehicle;

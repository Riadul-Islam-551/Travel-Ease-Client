import React from "react";
import { Link } from "react-router";

const MyVehicleCard = ({ vehecle, handleDeleteVehecle }) => {
  const { _id, vehicleName, category, pricePerDay, location, coverImage } =
    vehecle;

  return (
    <div className="mx-auto">
      <div className="card w-72 md:w-[320px] shadow-sm hover:shadow-lg bg-neutral">
        <figure className="px-10 pt-10">
          <div className="w-[300px] h-[180px]">
            <img
              src={coverImage}
              alt={vehicleName}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{vehicleName}</h2>
          <p>
            Price Per Day:{" "}
            <span className="font-bold text-secondary">${pricePerDay}</span>
          </p>
          <div className="flex justify-start items-center gap-4">
            <p className="p-2 text-center rounded bg-[#dfdfdf]">{location}</p>
            <p className="p-2 text-center rounded bg-[#dfdfdf]">
              Category: {category}
            </p>
          </div>
          <div className="card-actions flex justify-around items-center">
            <div className="w-full flex justify-between items-center">
              <Link
                to={`/updateVehicles/${_id}`}
                className="btn btn-accent shadow-none w-[130px]"
              >
                Update
              </Link>
              <button
                onClick={() => handleDeleteVehecle(_id)}
                className="btn btn-accent shadow-none w-[130px]"
              >
                Delete
              </button>
            </div>
            <Link
              to={`/vehicles/${_id}`}
              className="btn btn-primary shadow-none w-full"
            >
              See details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyVehicleCard;

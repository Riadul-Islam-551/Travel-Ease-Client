import React from "react";

const VehecleCard = ({ vehecle }) => {
  const {
    vehicleName,
    category,
    pricePerDay,
    location,
    availability,
    coverImage,
  } = vehecle;
  return (
    <div className="mx-auto ">
      <div className="card w-96 shadow-lg bg-neutral">
        <figure className="px-10 pt-10">
          <div className=" w-[300px] h-[180px]">
            <img
              src={coverImage}
              alt={vehicleName}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{vehicleName}</h2>
          <p>Price Per Day: <span className="font-bold text-secondary">${pricePerDay}</span></p>
          <div className="card-actions">
            <button className="btn btn-primary shadow-none">See details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehecleCard;

import React, { use } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxios from "../../hooks/useAxios";

const UpdateVehicles = () => {
  const axiosSecure = useAxiosSecure();
  const axiosInstance = useAxios
  const vehicle = useLoaderData();
  const navigate = useNavigate();

  const { _id, owner, vehicleName, pricePerDay, coverImage, availability } =
    vehicle;

  const handleUpdate = (e) => {
    e.preventDefault();
    const owner = e.target.owner.value;
    const vehicleName = e.target.vehicleName.value;
    const pricePerDay = e.target.pricePerDay.value;
    const coverImage = e.target.coverImage.value;
    const availability = e.target.availability.value;
    const updateVehicle = {
      owner,
      vehicleName,
      pricePerDay,
      coverImage,
      availability,
    };
    // console.log(updateVehicle);

    axiosSecure
      .patch(`/vehicles/${_id}`, updateVehicle)
      .then((data) => {
        Swal.fire({
          title: "Successfully update data",
          icon: "success",
          draggable: true,
        });
        navigate("/myVehicles");
      })
      .catch((error) =>
        Swal.fire({
          title: "Something error",
          icon: "error",
          draggable: true,
        })
      );
  };

  return (
    <div className="hero min-h-screen max-w-[1200px] mx-auto">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-primary mb-12">
            Update Information
          </h1>
          {/* <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
        </div>
        <div className="card bg-[#fdfdfd] w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleUpdate}>
              <fieldset className="fieldset">
                {/* owner name  */}
                <label className="label">Chnage Owner Name</label>
                <input
                  type="text"
                  className="input outline-none"
                  placeholder="Change owmer name"
                  defaultValue={owner}
                  name="owner"
                />
                {/* vehicle name  */}
                <label className="label">Chnage Vehicle Name</label>
                <input
                  type="text"
                  className="input outline-none"
                  placeholder="Change owmer name"
                  defaultValue={vehicleName}
                  name="vehicleName"
                />
                {/*price  */}
                <label className="label">Update Price</label>
                <input
                  type="text"
                  className="input outline-none"
                  placeholder="Price per day"
                  defaultValue={pricePerDay}
                  name="pricePerDay"
                />
                {/* Image  */}
                <label className="label">Update Vehicle Image</label>
                <input
                  type="url"
                  className="input outline-none"
                  placeholder="Image url"
                  defaultValue={coverImage}
                  name="coverImage"
                />
                {/* availability  */}
                <label className="label">Availability</label>
                <input
                  type="text"
                  className="input outline-none"
                  placeholder="Update availability"
                  defaultValue={availability}
                  name="availability"
                />

                <button type="submit" className="btn btn-primary mt-4">
                  Update
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateVehicles;

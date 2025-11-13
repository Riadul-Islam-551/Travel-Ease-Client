import React, { use } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";

const AddVehicles = () => {
  const { user } = use(AuthContext);
  const handleAddVehicle = (e) => {
    e.preventDefault();
    const name = e.target.owner.value;
    const vehicleName = e.target.vehicleName.value;
    const category = e.target.category.value;
    const price = e.target.pricePerDay.value;
    const location = e.target.location.value;
    const availability = e.target.availability.value;
    const description = e.target.description.value;
    const coverImage = e.target.coverImage.value;
    const email = e.target.userEmail.value;

    const newVehicle = {
      name,
      vehicleName,
      category,
      price,
      location,
      availability,
      description,
      coverImage,
      email,
    };

    // console.log(newVehicle);

    fetch("http://localhost:3000/vehicles", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newVehicle),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Success!", "You Booked the Vehicle successfully!", "success");
        }
      })
      .catch((err) => {
        swal("Error!", "There is something error", "error");
      });
  };
  return (
    <div className="bg-[#f1f1f1] min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl shadow-blue-200 p-8">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">
          Add a New Vehicle
        </h1>

        <form
          onSubmit={handleAddVehicle}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Vehicle Name */}
          <div className="form-control">
            <label className="label font-semibold">Vehicle Name</label>
            <input
              type="text"
              name="vehicleName"
              placeholder="Enter vehicle name"
              className="input input-bordered w-full outline-none"
              required
            />
          </div>

          {/* Owner Name */}
          <div className="form-control">
            <label className="label font-semibold">Owner Name</label>
            <input
              type="text"
              name="owner"
              placeholder="Enter owner name"
              className="input input-bordered w-full outline-none"
              required
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label font-semibold">Category</label>
            <select
              name="category"
              className="select select-bordered w-full outline-none"
              required
            >
              <option value="">Select Category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Electric">Electric</option>
              <option value="Van">Van</option>
            </select>
          </div>

          {/* Price Per Day */}
          <div className="form-control">
            <label className="label font-semibold">Price Per Day ($)</label>
            <input
              type="number"
              name="pricePerDay"
              placeholder="Enter price per day"
              className="input input-bordered w-full outline-none"
              required
            />
          </div>

          {/* Location */}
          <div className="form-control">
            <label className="label font-semibold">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              className="input input-bordered w-full outline-none"
              required
            />
          </div>

          {/* Availability */}
          <div className="form-control">
            <label className="label font-semibold">Availability</label>
            <select
              name="availability"
              className="select select-bordered w-full outline-none"
              required
            >
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
            </select>
          </div>

          {/* Description */}
          <div className="form-control md:col-span-2">
            <label className="label font-semibold">Description</label>
            <textarea
              name="description"
              placeholder="Write a short description"
              className="textarea textarea-bordered w-full h-28 outline-none"
              required
            ></textarea>
          </div>

          {/* Cover Image URL */}
          <div className="form-control md:col-span-2">
            <label className="label font-semibold">Cover Image URL</label>
            <input
              type="text"
              name="coverImage"
              placeholder="Paste image URL (e.g. imgbb)"
              className="input input-bordered w-full outline-none"
              required
            />
          </div>

          {/* User Email (read-only) */}
          <div className="form-control md:col-span-2">
            <label className="label font-semibold">User Email</label>
            <input
              type="email"
              name="userEmail"
              defaultValue={user?.email || ""}
              readOnly
              className="input input-bordered w-full outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-4">
            <button type="submit" className="btn btn-primary px-10">
              Add Vehicle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVehicles;

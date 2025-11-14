import React, { use, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Booking = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = use(AuthContext);
  const [bookedUsers, setBookedUser] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/booked?email=${user.email}`)
        .then((data) => {
          setBookedUser(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user?.email]);

  return (
    <div className="overflow-x-auto min-h-screen max-w-[1200px] mx-auto">
      <h2 className="text-xl font-semibold my-4 ">
        My Booked Vehicles ({bookedUsers?.length})
      </h2>
      <div>
        <table
          key={bookedUsers._id}
          className="table max-w-[1200px] mx-auto py-9"
        >
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Car</th>
              <th>Car Category</th>
            </tr>
          </thead>
          <tbody>
            {bookedUsers.map((bookedUser, index) => (
              <tr>
                <th>
                  <label>
                    <input type="number" className="" value={index + 1} />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.photoURL} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="">{bookedUser.vehicle}</span>
                </td>
                <td>
                  <span className="font-bold">{bookedUser.category}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;

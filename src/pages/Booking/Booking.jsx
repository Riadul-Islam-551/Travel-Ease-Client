import React, { use, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";

const Booking = () => {
  const { user } = use(AuthContext);
  const [bookedUsers, setBookedUser] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/booked?email=${user.email}`)
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
    <div className="overflow-x-auto min-h-screen">
      {bookedUsers?.length}
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

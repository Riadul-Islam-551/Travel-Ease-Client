import React, { use, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";

const Register = () => {
  const navigate = useNavigate();
  const [mess, setmess] = useState();
  const [showPass, setShowPass] = useState(false);
  const { createUser, setUser, updateUser } = use(AuthContext);
  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setmess(
        "Password must be at least 6 characters long and include one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }
    // const newUser = [name, email, photo, password];
    // console.log(newUser);

    createUser(email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            setUser(user);
          });
        e.target.reset();
        navigate("/");
        swal("Success!", "You Register the site successfully!", "success");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        swal("Error!", "There is something wrong", "error");
        // ..
      });
  };

 
  const handlePassword = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  return (
    <div className="hero min-h-screen max-w-[1200px] mx-auto">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-center text-primary">
            Register now!
          </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegistration}>
              <fieldset className="fieldset">
                {/* name  */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input outline-none"
                  placeholder="Name"
                  name="name"
                  required
                />
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input outline-none"
                  placeholder="Email"
                  name="email"
                  required
                />
                {/* photo url  */}
                <label className="label">Photo Url</label>
                <input
                  type="url"
                  className="input outline-none"
                  placeholder="Photo Url"
                  name="photo"
                  required
                />
                {/* password */}
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    className="input outline-none"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <button
                    onClick={handlePassword}
                    className="absolute top-3 right-3 z-10"
                  >
                    {showPass ? <FaEyeSlash /> : <FaRegEye />}
                  </button>
                </div>

                <div>
                  <p className="text-secondary text-xs w-[300px]">{mess}</p>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <div>
                  <p>
                    Already have an Account?{" "}
                    <span className="text-secondary font-bold">
                      <Link to="/login">Log In</Link>
                    </span>
                  </p>
                </div>
                {/* google button  */}
                
                {/* register button  */}
                <button className="btn btn-primary mt-1 shadow-none">
                  Register
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { use, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from 'sweetalert';


const Register = () => {
  const [mess, setmess] = useState();
  const [showPass, setShowPass] = useState(false);
  const { createUser, setUser } = use(AuthContext);
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
    const newUser = [name, email, photo, password];
    // console.log(newUser);

    createUser(email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        setUser(user);
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
                <button className="btn bg-white text-black border-[#e5e5e5] mt-4 shadow-none">
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
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

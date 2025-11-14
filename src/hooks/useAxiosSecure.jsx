import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import { use, useEffect } from "react";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user, logoutUser } = use(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // request interceptor
    const requestInterceptor = instance.interceptors.request.use((config) => {
      const token = user.accessToken
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }

      return config;
    });

    // response  interceptors
    const responsInterceptor = instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const status = err.status;
        if (status === 401 || status === 403) {
          logoutUser().then(() => {
            navigate("/register");
          });
        }
      }
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responsInterceptor);
    };
  }, [user, logoutUser, navigate]);

  return instance;
};

export default useAxiosSecure;

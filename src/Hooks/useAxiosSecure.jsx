import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    axiosSecure.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("access-token");
        // console.log("Token in request:", token);
        // console.log("token", localStorage.getItem("access-token"));
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        // console.log("Token in request header:", config.headers.authorization);
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      async (error) => {
        const status = error.response?.status;

        if (status === 401 || status === 403) {
          await logout();
          navigate("/signIn");
        }
        return Promise.reject(error);
      }
    );
  }, [logout, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;

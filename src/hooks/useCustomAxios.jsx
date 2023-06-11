import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const axiosSecure = axios.create({
  baseURL: "https://my-babel-server.vercel.app",
});
const useCustomAxios = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  // Request interceptor
  useEffect(() => {
    axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        // Handle request errors
        return Promise.reject(error);
      }
    );

    // Response interceptor
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        return Promise.reject(error);
      }
    );
  }, []);
  return axiosSecure;
};

export default useCustomAxios;

import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useCustomAxios = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  // Request interceptor
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
    async (response) => {
      // Check if response status is 401 or 403
      if (response.status === 401 || response.status === 403) {
        await logOut();
        navigate("/login");
      }
      return response;
    },
    (error) => {
      // Handle response errors
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useCustomAxios;

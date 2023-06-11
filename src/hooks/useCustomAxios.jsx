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
    (response) => {
      return response;
    },
    async (error) => {
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useCustomAxios;

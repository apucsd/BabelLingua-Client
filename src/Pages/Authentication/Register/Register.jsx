/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";
import getImageURL from "../../../resuable/getImageURL";
import { updateProfile } from "@firebase/auth";
import useCustomAxios from "../../../hooks/useCustomAxios";

const Register = () => {
  const { createUser } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const axiosSecure = useCustomAxios();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    if (data.password !== data.confirmPassword) {
      setLoading(false);
      return toast.error("Your confirm password didn't matched");
    }

    // get image url from function

    const photoURL = await getImageURL(data.image[0]);
    if (photoURL) {
      createUser(data.email, data.password)
        .then((result) => {
          updateProfile(result.user, {
            displayName: data.name,
            photoURL: photoURL,
          }).then((res) => {
            axiosSecure
              .post("/users", {
                name: data.name,
                email: data.email,
                photoURL: photoURL,
              })
              .then((res) => {
                if (res.data.insertedId) {
                  toast.success("Your account is created successfully");
                }
                setLoading(false);
              });
          });
        })
        .catch((error) => {
          toast.error(error.message);
          setLoading(false);
        });
    }
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          Create an account
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-lg p-3 border"
        >
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <input
                type="text"
                placeholder="Your Full Name"
                {...register("name", { required: true })}
                className="w-full rounded border-b  px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="w-full rounded border-b  px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100"
              />
            </div>

            <div className="relative">
              <input
                placeholder="Password"
                type={showPass ? "text" : "password"}
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9a-zA-Z]).{6,}$/,
                })}
                className="w-full rounded border-b  px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute top-3 right-3 cursor-pointer"
              >
                {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
              {errors.password && errors.password.type === "pattern" && (
                <p className="text-red-500">
                  Password must have at least 6 characters, a capital letter,
                  and a special character
                </p>
              )}
            </div>

            <div className="relative">
              <input
                placeholder="Confirm Password"
                type={showPass ? "text" : "password"}
                {...register("confirmPassword", { required: true })}
                className="w-full rounded border-b  px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute top-3 right-3 cursor-pointer"
              >
                {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            <div>
              <input
                type="file"
                {...register("image", { required: true })}
                className="w-full rounded border-b  px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100"
              />
              {errors.image && errors.image.type === "required" && (
                <p className="text-red-500 mt-3">
                  Please choose a profile picture
                </p>
              )}
            </div>

            <div className="flex items-center justify-center p-4">
              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link to="/login" className="link">
                  Login
                </Link>
              </p>
            </div>
            <div className="w-full">
              <button className="primary-btn w-full">
                {loading ? (
                  <FaSpinner className="animate-spin mx-auto text-center text-xl"></FaSpinner>
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </div>
          <div>
            <SocialLogin></SocialLogin>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

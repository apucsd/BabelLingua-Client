/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [message, setMessage] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const loading = false;
  const emailRef = useRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      return toast.error("Your confirm password didn't matched");
    }

    console.log(data);
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
                  <FaSpinner className="animate-spin mx-auto text-center text-lg"></FaSpinner>
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

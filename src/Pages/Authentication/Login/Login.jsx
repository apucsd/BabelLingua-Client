/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
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
  const onSubmit = (data) => console.log(data);

  //   ?reset email sent
  const handleResetPassword = async (event) => {
    event.preventDefault();
    // setMessage("");
    // setErrorMessage("");
    // const email = emailRef.current.value;
    // if (!email) {
    //   toast.error("Please enter your email first");
    // }
    // await resetPassword(email)
    //   .then(() => {
    //     setMessage(`Please check your email${email}`);
    //     toast.success(`A reset email has sent to ${email}`);
    //     setTimeout(() => {
    //       closeButtonRef.current.click();
    //       setMessage("");
    //     }, 2000);
    //   })
    //   .catch(() => {
    //     setErrorMessage("Invalid user or something wrong");
    //   });
  };
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          Welcome Back (name)!
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-lg p-3 border"
        >
          <div className="flex flex-col gap-4 p-4 md:p-8">
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
                {...register("password", { required: true })}
                className="w-full rounded border-b  px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute top-3 right-3 cursor-pointer"
              >
                {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
              Forget password ?
              <span
                className="link"
                onClick={() => window.my_modal_5.showModal()}
              >
                Reset
              </span>
            </p>

            <div className="flex items-center justify-center p-4">
              <p className="text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <Link to="/register" className="link">
                  Register
                </Link>
              </p>
            </div>
            <div className="w-full">
              <button className="primary-btn w-full">
                {loading ? (
                  <FaSpinner className="animate-spin mx-auto text-center text-lg"></FaSpinner>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </div>
          <div>
            <SocialLogin></SocialLogin>
          </div>
        </form>
      </div>

      {/* modal */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg text-center">Reset Your Password</h3>
          <input
            type="email"
            placeholder="Email"
            ref={emailRef}
            className="w-full rounded border-b  px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100"
          />
          <div className="w-1/2 mx-auto mt-8">
            <span onClick={handleResetPassword}>
              <button className="primary-btn">Get Reset Email</button>
            </span>
          </div>

          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Login;

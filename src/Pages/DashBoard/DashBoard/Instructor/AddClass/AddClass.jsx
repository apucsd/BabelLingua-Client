import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../../hooks/useAuth";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import useCustomAxios from "../../../../../hooks/useCustomAxios";
import getImageURL from "../../../../../resuable/getImageURL";
import { toast } from "react-hot-toast";

const AddClass = () => {
  const axiosSecure = useCustomAxios();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = async (data) => {
    const photoURL = await getImageURL(data.classImage[0]);
    data.classImage = photoURL;

    if (photoURL) {
      const res = await axiosSecure.post("/classes", data);

      if (res.data.insertedId) {
        toast.success(`Thanks your class added successfully`);
        reset();
      }
    }
  };

  return (
    <div className=" w-full p-4">
      <div className="text-center">
        <SectionTitle heading={"Add a new class"}></SectionTitle>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto p-3 border">
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <input
                type="text"
                placeholder="Class Name"
                {...register("className", { required: true })}
                className="w-full rounded border-b-2  px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100"
              />
            </div>
            <div>
              <input
                type="file"
                placeholder="Class Image"
                {...register("classImage", { required: true })}
                className="w-full rounded border-b-2  px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100"
              />
            </div>
            <div className="flex justify-center gap-20">
              <div className="w-full">
                <input
                  type="text"
                  value={user.displayName}
                  {...register("instructorName", { required: true })}
                  className="w-full rounded border-b-2  px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  value={user.email}
                  {...register("instructorEmail", { required: true })}
                  className="w-full rounded border-b-2  px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100"
                />
              </div>
            </div>
            <div className="flex justify-center gap-20">
              <div className="w-full">
                <input
                  type="number"
                  placeholder="Available Seats"
                  {...register("availableSeats", { required: true })}
                  className="w-full rounded border-b-2  px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100"
                />
              </div>
              <div className="w-full">
                <input
                  type="number"
                  placeholder="Price"
                  {...register("price", { required: true })}
                  className="w-full rounded border-b-2  px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100"
                />
              </div>
              <div className="hidden">
                <input
                  value="pending"
                  {...register("status", { required: true })}
                />
              </div>
            </div>
            <div className="w-full">
              <input type="submit" className="w-full primary-btn" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;

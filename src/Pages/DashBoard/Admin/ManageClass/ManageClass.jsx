import React from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { useQuery } from "react-query";
import useCustomAxios from "../../../../hooks/useCustomAxios";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const ManageClass = () => {
  const axiosSecure = useCustomAxios();
  const {
    refetch,
    isLoading,
    data: classes = [],
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure("/classes");
      return res.data;
    },
  });

  const handleApprove = async (id) => {
    const res = await axiosSecure.patch(`/classes/${id}`);

    if (res.data.modifiedCount > 0) {
      toast.success("Class has approved successfully");
      refetch();
    }
  };
  const handleDeny = async (id) => {
    const res = await axiosSecure.patch(`/classes/deny/${id}`);

    if (res.data.modifiedCount > 0) {
      toast.success("Class has Denied successfully");
      refetch();
    }
  };

  const sentFeedBack = async (id) => {
    Swal.fire({
      title: "Please send your feedback",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Feedback",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
      preConfirm: (feedback) => {
        if (!feedback || feedback.trim().length === 0) {
          Swal.showValidationMessage("Please enter your feedback");
          return false;
        }
        return feedback;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const feedback = result.value;

        // Send the feedback to the backend
        axiosSecure
          .patch(`/classes/feedback/${id}`, { feedback })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              toast.success("Your feedback has sended to the instructor");
            }
          });
      }
    });
  };

  return (
    <div className="p-4">
      <SectionTitle heading="manage classes"></SectionTitle>

      <div>
        <div className="overflow-x-auto p-4">
          <table className="table table-xs">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Approve</th>
                <th>Deny</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {classes &&
                classes?.map((classItem, index) => (
                  <tr key={classItem._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="rounded-full w-12 h-12">
                            <img src={classItem?.classImage} alt="" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{classItem?.className}</td>
                    <td>{classItem?.instructorName}</td>
                    <td>{classItem?.instructorEmail}</td>
                    <td>{classItem?.availableSeats}</td>
                    <td>{classItem?.price}</td>
                    <td>
                      {classItem?.status === "approved" ? (
                        <span className="text-green-500">
                          {" "}
                          {classItem?.status}
                        </span>
                      ) : classItem?.status === "denied" ? (
                        <span className="text-red-500">
                          {classItem?.status}
                        </span>
                      ) : (
                        <span className="text-blue-500">
                          {classItem?.status}
                        </span>
                      )}
                    </td>
                    <td>
                      <button
                        disabled={
                          classItem?.status === "approved" ||
                          classItem?.status === "denied"
                        }
                        onClick={() => handleApprove(classItem._id)}
                        className="btn btn-xs capitalize text-green-400"
                      >
                        Approve
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeny(classItem._id)}
                        disabled={
                          classItem?.status === "approved" ||
                          classItem?.status === "denied"
                        }
                        className="btn btn-xs text-red-400 capitalize"
                      >
                        Deny
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => sentFeedBack(classItem._id)}
                        className="btn btn-xs text-primary whitespace-nowrap capitalize"
                      >
                        Feedback
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div>
          <p className="text-center my-3 text-secondary">
            Scroll to see more info
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManageClass;

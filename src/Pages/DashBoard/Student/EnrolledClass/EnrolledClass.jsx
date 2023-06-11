import React from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { useQuery } from "react-query";
import useAuth from "../../../../hooks/useAuth";
import useCustomAxios from "../../../../hooks/useCustomAxios";
import NotingFound from "../../../../Components/Shared/NotingFound/NotingFound";

const EnrolledClass = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useCustomAxios();
  const {
    data: payments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if (user) {
        const response = await axiosSecure.get(`/payments/${user?.email}`);

        return response.data;
      }
    },
  });

  return (
    <div>
      <SectionTitle heading={"My enrolled classes"}></SectionTitle>

      {payments.length > 0 ? (
        <div className="overflow-x-auto p-4">
          <table className="table table-xs">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Class Image</th>
                <th>Instructor Name</th>
                <th>Class Name</th>

                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments &&
                payments?.map((payment, index) => (
                  <tr key={payment._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="rounded-full w-12 h-12">
                            <img src={payment?.classItem.classImage} alt="" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{payment?.classItem?.instructorName}</td>
                    <td>{payment?.classItem?.className}</td>

                    <td>
                      <span className="text-red-600 font-bold">
                        {payment?.classItem?.price}
                        <span className="text-xl">৳</span>
                      </span>
                    </td>
                    <td>
                      <span className="text-green-600 font-bold">Paid</span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <NotingFound></NotingFound>
      )}
    </div>
  );
};

export default EnrolledClass;

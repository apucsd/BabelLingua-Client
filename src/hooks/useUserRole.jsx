import useAuth from "./useAuth";
import { useQuery } from "react-query";
import useCustomAxios from "./useCustomAxios";

const useUserRole = () => {
  const axiosSecure = useCustomAxios();
  const { user, loading } = useAuth();

  const { data: userRole, isLoading } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/user/userRole/${user?.email}`);

      return res?.data?.role;
    },
  });

  return { userRole, isLoading };
};

export default useUserRole;

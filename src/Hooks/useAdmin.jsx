import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      if (!user?.email) return false; // Prevent request if email is undefined
      const res = await axiosSecure.get(`/users/admin/guide/${user.email}`);
      return res.data?.admin;
    },
    enabled: !!user?.email, // Runs only when user.email exists
  });

  return [isAdmin, isLoading];
};

export default useAdmin;

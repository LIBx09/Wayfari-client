import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSingleUsers = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: singleUsers = [] } = useQuery({
    queryKey: ["singleUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`); // Fix: Template string corrected

      return res.data;
    },
  });

  return [singleUsers];
};

export default useSingleUsers;

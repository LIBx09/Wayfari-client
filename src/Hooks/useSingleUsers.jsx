import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSingleUsers = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: singleUsers = [] } = useQuery({
    queryKey: ["singleUsers"],
    enabled: !!user?.email,

    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`, // ✅ Include token
        },
      });
      return res.data;
    },
  });

  return [singleUsers];
};

export default useSingleUsers;

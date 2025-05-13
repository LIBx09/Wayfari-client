import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSingleUsers = () => {
  const { user, loading } = useAuth();
  console.log("Auth User:", user);
  const axiosSecure = useAxiosSecure();

  const { data: singleUsers = [] } = useQuery({
    queryKey: ["singleUsers"],
    enabled: !!user?.email && !loading, // ✅ Only run if user is available and not loading

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

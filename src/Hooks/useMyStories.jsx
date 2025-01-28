import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyStories = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: myStories = [], refetch } = useQuery({
    queryKey: ["myStories"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/stories/${user?.email}`);

      return res.data;
    },
  });

  return [myStories, refetch];
};

export default useMyStories;

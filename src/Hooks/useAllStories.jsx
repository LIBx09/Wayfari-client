import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllStories = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allStories = [], refetch } = useQuery({
    queryKey: ["allStories"],
    queryFn: async () => {
      const res = await axiosSecure.get("/stories/all");

      return res.data;
    },
  });
  return [allStories, refetch];
};

export default useAllStories;

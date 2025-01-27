import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useFavoriteStories = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: favoriteStories = [], refetch } = useQuery({
    queryKey: ["favoriteStories", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/stories/favorites/${user.email}`);
      console.log("favorite story data", res.data);
      return res.data;
    },
  });

  return [favoriteStories, refetch];
};

export default useFavoriteStories;

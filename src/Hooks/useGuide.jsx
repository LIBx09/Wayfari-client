import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";

const useGuide = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  // console.log("email", user.email);
  // const axiosSecure = useAxiosSecure();
  // console.log("Fetching guide role for:", user?.email);

  const { data: isGuide, isLoading } = useQuery({
    queryKey: [user?.email, "isGuide"],
    queryFn: async () => {
      if (!user?.email) return false;
      const res = await axiosPublic.get(`/users/admin/guide/${user.email}`);
      return res.data?.guide;
    },
    enabled: !!user?.email, // Prevents API call until user.email is ready
  });

  return [isGuide, isLoading];
};

export default useGuide;

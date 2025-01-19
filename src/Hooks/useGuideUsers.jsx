import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGuideUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: guideUsers = [] } = useQuery({
    queryKey: ["guideUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/all/guide");
      console.log("data", res.data);
      return res.data;
    },
  });
  return [guideUsers];
};

export default useGuideUsers;

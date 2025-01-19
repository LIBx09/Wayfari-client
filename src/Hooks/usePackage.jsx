import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const usePackage = () => {
  const axiosPublic = useAxiosPublic();

  const { data: tourPackage = [] } = useQuery({
    queryKey: ["tourPackage"],
    queryFn: async () => {
      const res = await axiosPublic.get("/package");
      // console.log("dada", res.data);
      return res.data;
    },
  });

  return [tourPackage];
};

export default usePackage;

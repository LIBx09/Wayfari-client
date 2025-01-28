import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllPackage = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allPackages = [] } = useQuery({
    queryKey: ["allPackages"],
    queryFn: async () => {
      await axiosPublic.get("package");
    },
  });

  return [allPackages];
};

export default useAllPackage;

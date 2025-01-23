/* eslint-disable no-undef */
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useGuide from "./useguide";

const useBookingDB = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [isGuide] = useGuide();
  const email = user?.email;
  const role = isGuide ? "guide" : "tourist";
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings", email, role],
    queryFn: async () => {
      const res = await axiosPublic.get("/bookings", {
        params: {
          email,
          role,
        },
      });
      return res.data;
    },
    enabled: !!user && role !== undefined,
  });
  return [bookings, refetch];
};

export default useBookingDB;

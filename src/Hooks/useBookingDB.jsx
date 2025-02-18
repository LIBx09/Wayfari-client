/* eslint-disable no-undef */
import useAuth from "./useAuth";

import { useQuery } from "@tanstack/react-query";
import useGuide from "./useguide";
import useAxiosSecure from "./useAxiosSecure";

const useBookingDB = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [isGuide] = useGuide();
  const email = user?.email;
  const role = isGuide ? "guide" : "tourist";
  const {
    data: bookings = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["bookings", email, role],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookings/all-bookings/data", {
        params: {
          email,
          role,
        },
      });
      console.log("booking", res);
      return res.data;
    },
    enabled: !!user && role !== undefined,
  });
  return [bookings, refetch, isPending];
};

export default useBookingDB;

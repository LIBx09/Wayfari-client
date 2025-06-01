import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://tourism-jade-three.vercel.app",
  withCredentials: false,
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

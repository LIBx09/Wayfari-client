import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const GoogleIn = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
          role: "tourist",
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          navigate("/");
        });
        toast.success("User Logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        error;
        // toast.error("Google Sign-In failed. Please try again.");
      });
  };

  return (
    <div>
      <button
        className="btn btn-ghost btn-outline hover:after:bg-blue-400"
        onClick={handleGoogleSignIn}
      >
        Google
      </button>
    </div>
  );
};

export default GoogleIn;

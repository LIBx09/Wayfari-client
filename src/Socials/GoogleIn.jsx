import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const GoogleIn = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res);
        toast.success("User Logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google Sign-In failed. Please try again.");
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

import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LostPass = () => {
  const { user, forgotPassword } = useAuth();
  const emailUri = new URLSearchParams(location.search);
  const fillEmail = emailUri.get("email") || "";
  const [email, setEmail] = useState(fillEmail || user?.email || "");
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please Provide an Email address");
    }
    forgotPassword(email)
      .then((res) => {
        setEmail(res);
        navigate("/");
        toast.success("Password reset Email sent successfully");
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error);
        toast.error("Failed to send reset email. Please try again.");
      });
  };

  return (
    <div>
      <div
        className="md:w-6/12 mx-auto bg-[#C2FFC7] p-20 rounded-lg"
        data-aos="zoom-in-up"
      >
        <h3 className="font-bold text-lg mb-2">Get Reset Email!</h3>
        <form onSubmit={handleResetPassword}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <button className="btn btn-outline outline-dotted mt-5 ml-4">
            <a>Reset</a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LostPass;

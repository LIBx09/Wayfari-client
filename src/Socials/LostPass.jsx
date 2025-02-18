import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";

const LostPass = () => {
  const { user, forgotPassword } = useAuth();
  const location = useLocation(); // ✅ Fix location issue
  const emailUri = new URLSearchParams(location.search);
  const fillEmail = emailUri.get("email") || "";

  const [email, setEmail] = useState(fillEmail || user?.email || "");
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please Provide an Email address");
      return;
    }

    try {
      await forgotPassword(email); // ✅ Remove unnecessary setEmail
      toast.success("Password reset email sent successfully");
      navigate("/"); // ✅ Navigate only after success
    } catch (error) {
      console.error("Error sending password reset email:", error);
      toast.error("Failed to send reset email. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="md:w-6/12 bg-[#C2FFC7] p-10 rounded-lg shadow-lg"
        data-aos="zoom-in-up"
      >
        <h3 className="font-bold text-lg mb-4">Get Reset Email!</h3>
        <form
          onSubmit={handleResetPassword}
          className="flex flex-col space-y-4"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="input input-bordered input-accent w-full"
            required
          />
          <button
            type="submit"
            className="btn btn-outline outline-dotted w-full"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default LostPass;

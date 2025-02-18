import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomeMessage = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false);
      navigate("/home");
    }, 3000);
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {showWelcome ? (
        <>
          <h1 className="text-3xl font-bold mb-4">
            Welcome to Wayfari Tourism
          </h1>
          <div className="w-12 h-12 border-t-4 border-white rounded-full animate-spin"></div>
        </>
      ) : null}
    </div>
  );
};

export default WelcomeMessage;

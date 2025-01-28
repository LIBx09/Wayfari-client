import travel from "../../../assets/travel.JPG";
import { motion } from "framer-motion";

const Framer = () => {
  return (
    <div>
      <div className="text-center mb-10 h-[calc(100vh-200px)] flex items-center justify-center">
        <motion.img
          src={travel}
          alt="Parallax Image"
          animate={{ rotate: [0, 15, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto h-full max-h-[500px] w-auto rounded-lg shadow-lg" // Ensures the image maintains aspect ratio
        />
      </div>
      <div className="bg-blue-950"></div>
    </div>
  );
};

export default Framer;

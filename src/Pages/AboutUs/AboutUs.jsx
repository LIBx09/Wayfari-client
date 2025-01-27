import { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="container mx-auto">
        <div
          className="card bg-base-100 shadow-xl mx-auto w-11/12 md:w-3/4 p-6"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-primary">
            About Me
          </h2>
          <p className="text-lg text-center mb-4">
            Hello! I am a Junior MERN Web Developer with experience in building
            modern web applications using the latest technologies.
          </p>
          <p className="text-center mb-6">
            My skills include HTML, CSS, Tailwind CSS, JavaScript, React,
            Firebase, and more. I am passionate about creating responsive,
            user-friendly websites and constantly learning new tools to improve
            my craft.
          </p>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            data-aos="zoom-in"
          >
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-6xl text-orange-500" />
              <span className="mt-2 font-bold">HTML5</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-6xl text-blue-500" />
              <span className="mt-2 font-bold">CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-6xl text-cyan-500" />
              <span className="mt-2 font-bold">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <SiJavascript className="text-6xl text-yellow-500" />
              <span className="mt-2 font-bold">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-6xl text-blue-400" />
              <span className="mt-2 font-bold">React</span>
            </div>
            <div className="flex flex-col items-center">
              <SiFirebase className="text-6xl text-yellow-600" />
              <span className="mt-2 font-bold">Firebase</span>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-6xl text-green-500" />
              <span className="mt-2 font-bold">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb className="text-6xl text-green-600" />
              <span className="mt-2 font-bold">MongoDB</span>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/contact" className="btn btn-primary" data-aos="flip-up">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

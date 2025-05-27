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
import AboutSite from "./AboutSite";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pb-5 dark:bg-[#0F172A] ">
      <AboutSite />
      <div className=" mt-10 mx-auto">
        <div
          className="card  shadow-lg mx-auto w-11/12 md:w-3/4 p-6 rounded-lg"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-300">
            About Me
          </h2>
          <p className="text-lg text-center mb-4 text-gray-500">
            Hello! I am a Junior MERN Web Developer with experience in building
            modern web applications using the latest technologies.
          </p>
          <p className="text-center mb-6 text-gray-600">
            My skills include HTML, CSS, Tailwind CSS, JavaScript, React,
            Firebase, and more. I am passionate about creating responsive,
            user-friendly websites and constantly learning new tools to improve
            my craft.
          </p>

          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            data-aos="zoom-in"
          >
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-6xl text-orange-600" />
              <span className="mt-2 font-semibold text-gray-500">HTML5</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-6xl text-blue-600" />
              <span className="mt-2 font-semibold text-gray-500">CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-6xl text-teal-500" />
              <span className="mt-2 font-semibold text-gray-500">
                Tailwind CSS
              </span>
            </div>
            <div className="flex flex-col items-center">
              <SiJavascript className="text-6xl text-yellow-600" />
              <span className="mt-2 font-semibold text-gray-500">
                JavaScript
              </span>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-6xl text-blue-500" />
              <span className="mt-2 font-semibold text-gray-500">React</span>
            </div>
            <div className="flex flex-col items-center">
              <SiFirebase className="text-6xl text-yellow-500" />
              <span className="mt-2 font-semibold text-gray-500">Firebase</span>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-6xl text-green-600" />
              <span className="mt-2 font-semibold text-gray-500">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb className="text-6xl text-green-500" />
              <span className="mt-2 font-semibold text-gray-500">MongoDB</span>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="btn btn-primary px-8 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition"
              data-aos="flip-up"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

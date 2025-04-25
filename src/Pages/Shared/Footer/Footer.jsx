import { Link } from "react-router-dom";
import logo from "../../../assets/w1logo.svg";
const Footer = () => {
  return (
    <div className="">
      <footer className="footer w-11/12 mx-auto dark:text-slate-500 text-base-content p-10 border-t-2">
        <aside>
          <img className="w-28" src={logo} alt="" />
          <h2 className="font-bold text-2xl dark:text-slate-200">
            Wayfari Tourism
          </h2>
          <p className="dark:text-slate-300">
            {" "}
            Providing reliable Services since 2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title dark:text-slate-200">Home</h6>

          <Link to="/home" className="link link-hover">
            Home
          </Link>
          <Link to="/aboutUs" className="link link-hover">
            About Me
          </Link>
          <Link to="/community" className="link link-hover">
            Community
          </Link>
          <Link to="contact" className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title dark:text-slate-200">Dashboard</h6>
          <Link to="/dashboard" className="link link-hover">
            Dashboard
          </Link>
          <Link to="/dashboard/manageProfile" className="link link-hover">
            Profile
          </Link>
          <Link to="/dashboard/bookings" className="link link-hover">
            Tours
          </Link>
          <Link to="/dashboard/addStories" className="link link-hover">
            Add Stories
          </Link>
          <Link to="/dashboard/manageStories" className="link link-hover">
            Manage Stories
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

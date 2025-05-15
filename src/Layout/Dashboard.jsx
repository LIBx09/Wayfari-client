import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import useAdmin from "../Hooks/useAdmin";
import useGuide from "../Hooks/useguide";
import Loading from "../components/Loading/Loading";
import DashNavbar from "../Pages/Dashboard/DashHome/DashNavbar";
import logo from "../assets/logo.png";
import sideImg from "../assets/dashSidebarImg.jpg";
import { FaBars } from "react-icons/fa";
// import DashFooter from "../Pages/Dashboard/DashHome/DashFooter";

const Dashboard = () => {
  const [isAdmin, adminLoading] = useAdmin();
  const [isGuide, guideLoading] = useGuide();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (adminLoading || guideLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="hidden md:block border-b">
        <DashNavbar />
      </div>
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="md:w-64 h-auto md:h-screen md:sticky top-0  p-4">
          <div className="flex justify-between items-center">
            <button
              className="flex items-center md:hidden text-white text-2xl mb-4"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FaBars className="text-slate-700 text-lg mt-2" /> <br />
              <img className="w-auto h-12" src={logo} alt="ssss" />
              <br />
            </button>
            <div className=" md:hidden">
              <DashNavbar />
            </div>
          </div>

          <div
            className={`md:block ${
              sidebarOpen ? "block" : "hidden"
            } border-r h-full`}
          >
            <ul className="menu">
              {isAdmin && (
                <>
                  <li>
                    <Link to="/dashboard">DASHBOARD</Link>
                  </li>
                  {/* <li>
                    <NavLink to="/dashboard/adminHome">ADMIN HOME</NavLink>
                  </li> */}
                  <li>
                    <NavLink to="/dashboard/addPackage">ADD PACKAGE</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/allUsers">ALL USERS</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/apply">APPLICANTS</NavLink>
                  </li>
                </>
              )}
              {isGuide && (
                <>
                  <li>
                    <Link to="/dashboard">DASHBOARD</Link>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageProfile">
                      MANAGE PROFILE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/bookings">
                      MY ASSIGNED TOURS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/addStories">ADD STORIES</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageStories">
                      MANAGE STORIES
                    </NavLink>
                  </li>
                </>
              )}
              {!isAdmin && !isGuide && (
                <>
                  <li>
                    <Link to="/dashboard">DASHBOARD</Link>
                  </li>

                  <li>
                    <NavLink to="/dashboard/bookings">MY BOOKINGS</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageStories">
                      MANAGE STORIES
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/addStories">ADD STORIES</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/joinGuide">JOIN AS GUIDE</NavLink>
                  </li>
                </>
              )}
            </ul>
            <div className="border h-[230px] ml-2 mr-6 rounded-md p-2 mt-10">
              <img src={sideImg} className="h-full rounded-md" alt="" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow w-full md:w-9/12 mx-auto p-4">
          <section className="-mt-[90px] md:-mt-4 border-b hidden md:block"></section>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

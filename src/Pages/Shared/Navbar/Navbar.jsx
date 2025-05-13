import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../assets/w1logo.svg";
import ThemeToggle from "../../../components/ThemeToggle/ThemeToggle";
import useSingleUsers from "../../../Hooks/useSingleUsers";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [singleUsers] = useSingleUsers();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold border-b-2 border-blue-500" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold border-b-2 border-blue-500" : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold border-b-2 border-blue-500" : ""
          }
        >
          Community
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold border-b-2 border-blue-500" : ""
          }
        >
          Contact Me
        </NavLink>
      </li>
      {!user && (
        <li>
          <NavLink
            to="/signIn"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold border-b-2 border-blue-500"
                : ""
            }
          >
            Sign In
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <>
      <div className="navbar sticky z-20 top-0 bg-base-100 shadow-sm border-b-2 mx-auto dark:bg-gray-900 dark:text-white w-11/12">
        <div className="flex-1">
          <Link to="/" className="flex gap-2 items-center">
            <img className="w-auto h-16 p-2" src={logo} alt="Logo" />
            <span className="font-bold">Wayfari Tourism</span>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-4 px-1">{navLinks}</div>

        {/* Hamburger menu button */}
        <div className="md:hidden sticky top-0">
          <button
            className="text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <RxCross2 /> : <CiMenuFries />}
          </button>
        </div>

        {/* Profile dropdown (only on large screens) */}
        {user && (
          <div className="hidden md:block dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
              <div className="font-bold text-sm -mt-2 text-gray-600 dark:text-white">
                <span>{singleUsers?.role}</span>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-900 dark:text-white"
            >
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/all-package">All Package</Link>
              </li>
              <ThemeToggle />
              <li className="mt-2">
                <button
                  onClick={logout}
                  className="bg-gray-200 block text-center"
                >
                  Sign Out
                </button>
              </li>
              <div className="divider">-</div>
              <div className="border p-2 rounded-lg text-sm">
                <p className="flex items-center gap-2 ml-2">
                  <CiUser />
                  {user?.displayName}
                </p>
                <p className="flex flex-wrap text-xs items-center gap-2 p-2">
                  <MdAlternateEmail />
                  {user?.email}
                </p>
              </div>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden w-full bg-base-100 dark:bg-gray-900 shadow-md p-4 z-10 flex flex-col gap-4">
          {navLinks}
          {user && (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/all-package">All Package</Link>
              </li>
              <li>
                <ThemeToggle />
              </li>
              <li>
                <button onClick={logout}>Sign Out</button>
              </li>
              <div className="border p-2 rounded-lg text-sm">
                <p className="flex items-center gap-2 ml-2">
                  <CiUser />
                  {user?.displayName}
                </p>
                <p className="flex flex-wrap text-xs items-center gap-2 p-2">
                  <MdAlternateEmail />
                  {user?.email}
                </p>
              </div>
            </>
          )}
        </ul>
      )}
    </>
  );
};

export default Navbar;

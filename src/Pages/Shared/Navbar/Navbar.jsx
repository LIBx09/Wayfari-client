import { CiUser } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../assets/navlogo.PNG";
import ThemeToggle from "../../../components/ThemeToggle/ThemeToggle";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm  border-b-2 w-11/12 mx-auto dark:bg-gray-900 dark:text-white">
        <div className="flex-1">
          <Link to="/" className="flex gap-2 items-center">
            <img className="w-auto h-16 bg-black p-2 " src={logo} alt="ssss" />
            <span className="font-bold">Wayfari Tourism</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="hidden md:flex gap-4 px-1">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold border-b-2 border-blue-500"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold border-b-2 border-blue-500"
                    : ""
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/community"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold border-b-2 border-blue-500"
                    : ""
                }
              >
                Community
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold border-b-2 border-blue-500"
                    : ""
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
          </ul>

          {user && (
            <div className="dropdown dropdown-end z-50">
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-900 dark:text-white"
              >
                <div className="md:hidden">
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/aboutUs">About Us</Link>
                  </li>
                  <li>
                    <Link to="/community">Community</Link>
                  </li>
                </div>
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

                <div className="border p-2 rounded-lg">
                  {/* TODO: set the data from db  */}

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
      </div>
    </>
  );
};

export default Navbar;

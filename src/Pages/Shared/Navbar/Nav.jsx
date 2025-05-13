import { CiUser } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../assets/w1logo.svg";
import ThemeToggle from "../../../components/ThemeToggle/ThemeToggle";
import useSingleUsers from "../../../Hooks/useSingleUsers";

const Nav = () => {
  const { user, logout } = useAuth();
  const [singleUsers] = useSingleUsers();

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/aboutUs", label: "About Us" },
    { to: "/community", label: "Community" },
    { to: "/contact", label: "Contact Me" },
  ];

  return (
    <div className="navbar sticky z-20 top-0 w-10/12 mx-auto bg-base-100 ">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 font-bold border-b-2 border-blue-500"
                      : "hover:text-blue-500"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <Link to="/" className="flex items-center gap-2 ml-2">
          <img src={logo} alt="Wayfari Logo" className="w-auto h-14" />
          <span className="font-bold text-lg">Wayfari Tourism</span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold border-b-2 border-blue-500"
                    : "hover:text-blue-500"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {!user ? (
          <Link to="/login" className="btn btn-sm btn-primary">
            Login
          </Link>
        ) : (
          <div className="dropdown dropdown-end z-50">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
              title={user?.displayName}
            >
              <div className="w-10 rounded-full ring ring-blue-400 ring-offset-2">
                <img
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  alt="User"
                />
              </div>
            </button>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-60 dark:bg-gray-900"
            >
              <li>
                <span className="font-semibold text-sm capitalize">
                  Role: {singleUsers?.role || "User"}
                </span>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/all-package">All Packages</Link>
              </li>
              <li>
                <ThemeToggle />
              </li>
              <li>
                <button
                  onClick={logout}
                  className="text-left text-red-500 mt-1"
                >
                  Sign Out
                </button>
              </li>
              <div className="divider my-1" />
              <div className="p-2 text-sm space-y-1">
                <p className="flex items-center gap-2">
                  <CiUser />
                  {user?.displayName}
                </p>
                <p className="flex items-center gap-2 text-xs break-words">
                  <MdAlternateEmail />
                  {user?.email}
                </p>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;

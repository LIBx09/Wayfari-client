import { CiUser } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = true;

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm  w-full border-b-2">
        <div className="flex-1 w-11/12 mx-auto ">
          <Link to="/" className="flex gap-2 items-center">
            <img className="w-auto h-7" src="img" alt="ssss" />
            <span className="font-bold">Wayfari Tourism</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/community">Community</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>

            {!user && (
              <li>
                <Link to="/signIn">Sign In</Link>
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
                {/* title={user?.displayName} */}
                <div className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/announcement">Announcement</Link>
                </li>
                <li>
                  <Link to="/myArtifacts">My Artifacts</Link>
                </li>
                <li className="mt-2">
                  <button
                    //   onClick={getOut}
                    className="bg-gray-200 block text-center"
                  >
                    Sign Out
                  </button>
                </li>
                <div className="divider">-</div>

                <div className="border p-2 rounded-lg">
                  <p className="flex items-center gap-2 ml-2">
                    <CiUser />
                    user name{" "}
                  </p>
                  <p className="flex flex-wrap text-xs items-center gap-2 p-2">
                    <MdAlternateEmail />
                    ibrahim@gmail.com
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

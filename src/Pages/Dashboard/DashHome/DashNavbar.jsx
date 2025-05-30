import { CiUser } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useBookingDB from "../../../Hooks/useBookingDB";
import logo from "../../../assets/logo.png";
import useSingleUsers from "../../../Hooks/useSingleUsers";

const DashNavbar = () => {
  const [singleUsers] = useSingleUsers();
  const { user, logout } = useAuth();
  const [bookings] = useBookingDB();

  const totalPrice = bookings.reduce(
    (acc, booking) => acc + (booking.paymentPrice || 0),
    0
  );
  console.log(totalPrice);

  return (
    <div>
      <div className="navbar">
        <div className="flex-1 hidden md:block">
          <Link to="/" className="flex gap-2 items-center">
            <img className="w-auto h-16" src={logo} alt="ssss" />
            <span className="font-bold">Wayfari Tourism</span>
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
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
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {bookings.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  Booking {bookings.length}
                </span>
                <span className="text-info">Subtotal: ${totalPrice}</span>
                <div className="card-actions">
                  <Link to="/dashboard/bookings">
                    <button className="btn btn-primary btn-block">
                      View Bookings
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
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
                <Link to="/home">HOME</Link>
              </li>
              <li>
                <Link to="/all-package">PACKAGES</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
              <li>
                <Link to="/dashboard/manageProfile">PROFILE</Link>
              </li>
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
                  {singleUsers?.name}
                </p>
                <p className="flex flex-wrap text-xs items-center gap-2 p-2">
                  <MdAlternateEmail />
                  {singleUsers?.email}
                </p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNavbar;

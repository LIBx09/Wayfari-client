import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useGuide from "../Hooks/useguide";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isGuide] = useGuide();

  return (
    <div className="flex">
      <div className="w-64 h-dvh sticky bg-orange-400">
        <ul className="menu">
          {isAdmin && (
            <>
              <div>
                <h2 className="text-3xl ml-4 mt-3 text-black font-bold">
                  ADMIN DASHBOARD
                </h2>
              </div>
              <div className="divider"></div>
              <li>
                <NavLink to="/dashboard/adminHome">ADMIN HOME</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addPackage">ADD PACKAGE</NavLink>
              </li>
              {/* <li>
                <NavLink to="/dashboard/bookings">BOOKING DETAILS</NavLink>
              </li> */}
              <li>
                <NavLink to="/dashboard/allUsers">ALL USER</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/apply">APPLICANTS</NavLink>
              </li>
            </>
          )}
          {isGuide && (
            <>
              <div>
                <h2 className="text-3xl ml-4 mt-3 text-black font-bold">
                  GUIDE DASHBOARD
                </h2>
              </div>
              <div className="divider"></div>
              <li>
                <NavLink to="/dashboard/manageProfile">MANAGE PROFILE</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">MY ASSIGNED TOURS</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addStories">ADD STORIES</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageStories">MANAGE STORIES</NavLink>
              </li>
            </>
          )}
          {!isAdmin && !isGuide ? (
            <>
              <div>
                <h2 className="text-3xl ml-4 mt-3 text-black font-bold">
                  USER DASHBOARD
                </h2>
              </div>
              <div className="divider"></div>
              <li>
                <NavLink to="/dashboard/manageProfile">Manage Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">My Booking</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageStories">Manage Stories</NavLink>
              </li>
              {/* <li>
                <NavLink to="/dashboard/">Payment History</NavLink>
              </li> */}
              <li>
                <NavLink to="/dashboard/addStories">Add Stories</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/joinGuide">Join As Tour Guide</NavLink>
              </li>
            </>
          ) : (
            ""
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className=" w-9/12 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

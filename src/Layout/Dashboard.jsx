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
              <li>
                <NavLink to="/dashboard/adminHome">ADMIN HOME</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addPackage">ADD PACKAGE</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">ALL USER</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/apply">APPLICATIONS Guide</NavLink>
              </li>
            </>
          )}
          {!isAdmin && !isGuide ? (
            <>
              <li>
                <NavLink to="/dashboard/">Manage Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/">My Booking</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/">Manage Stories</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/">Payment History</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/">Add Stories</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/">Join As Tour Guide</NavLink>
              </li>
            </>
          ) : (
            ""
          )}
          {isGuide && (
            <>
              <li>
                <NavLink to="/dashboard/">Guide</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/">Guide</NavLink>
              </li>
            </>
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

import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  //   const isAdmin = "";
  // const isGuide = '';

  return (
    <div className="flex">
      <div className="w-64 h-screen bg-orange-400">
        <ul className="menu">
          {/* {isAdmin ? ( */}
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
            <div className="divider"></div>
          </>
          {/* // ) : ( */}
          <>
            <li>
              <NavLink to="/dashboard/">User Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/">My Cart</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/">RESERVATION</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/">PAYMENT HISTORY</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/">ADD REVIEW</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/">Payment History</NavLink>
            </li>
            <div className="divider"></div>
          </>
          <>
            <li>
              <NavLink to="/dashboard/">Guides</NavLink>
            </li>
          </>
          {/* )} */}
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
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

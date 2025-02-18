import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Layout = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

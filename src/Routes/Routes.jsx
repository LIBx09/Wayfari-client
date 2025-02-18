import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Socials/SignIn";
import SignUp from "../Socials/SignUp";
import Error from "../Layout/Error";
import LostPass from "../Socials/LostPass";
import Addpackage from "../Pages/Dashboard/Admin/AddPackage/Addpackage";
import PackageDetail from "../Pages/PackageDetail/PackageDetail";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import Dashboard from "../Layout/Dashboard";
import Applicants from "../Pages/Dashboard/Admin/Applicants/Applicants";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import BookingForm from "../Pages/BookingForm/BookingForm";
import GuideDetails from "../Pages/GuideDetails/GuideDetails";
import BookingTours from "../Pages/Dashboard/BookingTours/BookingTours";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ApplyGuideForm from "../Pages/Dashboard/ApplyForGuide/ApplyGuideForm";
import ManageProfile from "../Pages/Dashboard/ManageProfile/ManageProfile";
import AddStories from "../Pages/Dashboard/AddStories/AddStories";
import ManageStories from "../Pages/Dashboard/ManageStories/ManageStories";
import UpdateStories from "../Pages/Dashboard/UpdateStories/UpdateStories";
import PrivateRoute from "./PrivateRoute";
import Community from "../Pages/Community/Community";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../components/Contact/Contact";
import AdminRoutes from "./AdminRoutes";
import Allpackage from "../Pages/AllPackage/Allpackage";
import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";
import DashOutlet from "../Pages/Dashboard/DashOutlet/DashOutlet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <WelcomeMessage />,
      },
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "details/:id",
        element: <PackageDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/package/details/${params.id}`),
      },
      {
        path: "/details/:id/guideDetails/:guideId",
        element: <GuideDetails />,
      },
      {
        path: "guideDetails/:guideId",
        element: <GuideDetails />,
      },
      {
        path: "/bookingForm",
        element: (
          <PrivateRoute>
            <BookingForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/community",
        element: <Community />,
      },

      {
        path: "/all-package",
        element: <Allpackage />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },

      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "reset",
        element: <LostPass />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
    children: [
      //user & guide routes
      {
        index: true,
        element: <DashOutlet />,
      },
      {
        path: "bookings",
        element: (
          <PrivateRoute>
            <BookingTours />
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "joinGuide",
        element: (
          <PrivateRoute>
            <ApplyGuideForm />
          </PrivateRoute>
        ),
      },
      {
        path: "manageProfile",
        element: (
          <PrivateRoute>
            <ManageProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "addStories",
        element: (
          <PrivateRoute>
            <AddStories />
          </PrivateRoute>
        ),
      },
      {
        path: "manageStories",
        element: (
          <PrivateRoute>
            <ManageStories />
          </PrivateRoute>
        ),
      },
      {
        path: "editStory/:id",
        element: (
          <PrivateRoute>
            <UpdateStories />
          </PrivateRoute>
        ),
      },

      //admin routes
      {
        path: "adminHome",
        element: (
          <AdminRoutes>
            <AdminHome />
          </AdminRoutes>
        ),
      },
      {
        path: "addPackage",
        element: (
          <AdminRoutes>
            <Addpackage />
          </AdminRoutes>
        ),
      },
      {
        path: "allUsers",
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },
      {
        path: "apply",
        element: (
          <AdminRoutes>
            <Applicants />
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default router;

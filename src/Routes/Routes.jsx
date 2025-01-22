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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
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
        element: <BookingForm />,
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
        path: "/reset",
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
        path: "bookings",
        element: <BookingTours />,
      },
      {
        path: "payment",
        element: <Payment />,
      },

      //admin routes
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "addPackage",
        element: <Addpackage />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
      {
        path: "apply",
        element: <Applicants />,
      },
    ],
  },
]);

export default router;

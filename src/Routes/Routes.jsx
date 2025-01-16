import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Socials/SignIn";
import SignUp from "../Socials/SignUp";
import Error from "../Layout/Error";
import LostPass from "../Socials/LostPass";
import Addpackage from "../Pages/Dashboard/Admin/AddPackage/Addpackage";
import PackageDetail from "../Pages/PackageDetail/PackageDetail";

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
        path: "addPackage",
        element: <Addpackage />,
      },
      {
        path: "details/:id",
        element: <PackageDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/package/details/${params.id}`),
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
]);

export default router;

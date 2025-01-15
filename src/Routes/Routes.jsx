import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Socials/SignIn";
import SignUp from "../Socials/SignUp";
import Error from "../Layout/Error";
import LostPass from "../Socials/LostPass";

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

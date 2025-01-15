import { Link, useNavigate } from "react-router-dom";
import registerLottie from "../assets/lottie/signup.json";
import Lottie from "lottie-react";
import GoogleIn from "./GoogleIn";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const SignUp = () => {
  const { createUser, manageUserProfile } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const { firstName, lastName, ...rest } = data;
    const name = `${firstName} ${lastName}`;
    const userData = {
      ...rest,
      name,
      //   role: "Tourist",
    };
    console.log(userData);

    //getting data for user create into auth
    createUser(userData?.email, userData?.password).then((result) => {
      const loggedUser = result.user;
      console.log("logged user", loggedUser);

      //getting data for user profile update
      manageUserProfile(name, userData?.photo)
        .then(() => {
          toast.success("user profile updated successfully");
          reset();
        })
        .catch((errors) => console.log(errors));
      navigate("/");
    });
  };

  return (
    <div className="flex flex-col lg:flex-row w-10/12 mx-auto p-10 rounded-xl items-center">
      <div className="card glass-effect bg-base-100  shrink-0 shadow-2xl w-full lg:w-5/12 mx-auto">
        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            action="#"
          >
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h5>
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First Name
                </label>
                <input
                  type="text"
                  {...register("firstName", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("lastName", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder=" Name"
                  required
                />
              </div>
            </div>
            <div className="">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Photo URL
              </label>
              <input
                type="url"
                {...register("photo", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Your Profile URL"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            {/* Optional TODO: GOOGLE SIGN IN */}
            <div className="">
              <GoogleIn />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign Up
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already Have Account?{" "}
              <Link
                to="/signIn"
                href="#"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full lg:w-5/12 h-[400px] mx-auto">
        <Lottie animationData={registerLottie}></Lottie>
      </div>
    </div>
  );
};

export default SignUp;

import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-600 mb-8">
        We are sorry, but an unexpected error occurred.
      </p>
      {/* <img src={error} alt="" /> */}
      <Link to={"/"}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default Error;

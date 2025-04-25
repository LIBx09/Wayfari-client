import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const GuideCards = ({ guide }) => {
  console.log(guide);
  const { photo, name, email, role, _id } = guide;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      {/* Guide Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={photo}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Guide Info */}
      <div className="p-5 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500 capitalize">{role} Guide</p>

        {/* Email */}
        <p className="text-sm text-gray-600 mt-2">
          Reach out:{" "}
          <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
            {email}
          </a>
        </p>

        {/* Details Button */}
        <div className="mt-4">
          <Link to={`guideDetails/${_id}`}>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuideCards;

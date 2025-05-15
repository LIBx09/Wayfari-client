import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const GuideCards = ({ guide }) => {
  const { photo, name, email, role, _id } = guide;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 text-center transition transform hover:scale-105">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src={photo}
          alt={`${name}'s profile`}
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
      </div>

      {/* Guide Info */}
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-sm text-blue-600 mb-1 capitalize">{role} Guide</p>

      <p className="text-gray-500 text-sm mb-4">
        <a href={`mailto:${email}`} className="hover:underline">
          {email}
        </a>
      </p>

      {/* View Profile Button */}
      <Link to={`guideDetails/${_id}`}>
        <button className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition">
          View Profile
        </button>
      </Link>
    </div>
  );
};

export default GuideCards;

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const GuideCards = ({ guide }) => {
  const { photo, name, email, role, _id } = guide;
  // this component user in home page for tabs
  return (
    <div className="card w-full  bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={photo}
        alt={`${name}'s profile`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500 mb-4">
          {role.charAt(0).toUpperCase() + role.slice(1)} Guide
        </p>
        <p className="text-sm text-gray-600">
          Reach out:{" "}
          <a href={`mailto:${email}`} className="text-blue-500 underline">
            {email}
          </a>
        </p>
        <div className="mt-4">
          <Link to={`guideDetails/${_id}`}>
            <button className="btn  btn-xs">details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuideCards;

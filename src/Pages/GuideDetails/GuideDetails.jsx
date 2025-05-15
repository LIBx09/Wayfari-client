/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaInfoCircle,
} from "react-icons/fa";

const GuideDetails = () => {
  const { id, guideId } = useParams();
  console.log("sadfasd", id, guideId);
  const [guideData, setGuideData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const url = id
      ? `https://tourism-jade-three.vercel.app/users/all/guide/${guideId}?detailsId=${id}`
      : `https://tourism-jade-three.vercel.app/users/all/guide/${guideId}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch guide data.");
        }
        return response.json();
      })
      .then((data) => {
        setGuideData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred while fetching the data.");
        setLoading(false);
      });
  }, [id, guideId]);

  if (loading) {
    return (
      <p className="text-center text-gray-600 dark:text-gray-400">Loading...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!guideData) {
    return <p className="text-center text-red-500">No guide found.</p>;
  }

  return (
    <div className="p-6 flex justify-center">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        {/* Guide Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Guide Details:{" "}
            <span className="text-blue-500">{guideData.name || "Unknown"}</span>
          </h2>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center my-4">
          <img
            src={guideData.photo || "/default-avatar.jpg"} // Fallback image
            alt={guideData.name || "Guide Photo"}
            className="w-28 h-28 rounded-full object-cover border shadow-md"
          />
        </div>

        {/* Guide Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1 */}
          <div className="space-y-4">
            <InfoRow
              icon={<FaUserCircle className="text-blue-500" />}
              label="Name"
              value={guideData.name}
            />
            <InfoRow
              icon={<FaEnvelope className="text-green-500" />}
              label="Email"
              value={guideData.email}
            />
            <InfoRow
              icon={<FaBriefcase className="text-purple-500" />}
              label="Role"
              value={guideData.role}
            />
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <InfoRow
              icon={<FaMapMarkerAlt className="text-red-500" />}
              label="Location"
              value={guideData.location}
            />
            <InfoRow
              icon={<FaPhone className="text-yellow-500" />}
              label="Phone"
              value={guideData.phone}
            />
            <InfoRow
              icon={<FaInfoCircle className="text-blue-400" />}
              label="Bio"
              value={guideData.bio}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Information Row Component
const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-md shadow-sm">
    {icon}
    <div>
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        {label}
      </h3>
      <p className="text-md text-gray-600 dark:text-gray-200">
        {value || "Not available"}
      </p>
    </div>
  </div>
);

export default GuideDetails;

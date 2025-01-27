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
  const [guideData, setGuideData] = useState();
  // console.log(guideData?.data?.name);

  useEffect(() => {
    // Determine the fetch URL based on the presence of 'id'
    const url = id
      ? `http://localhost:5000/users/all/guide/${guideId}?detailsId=${id}`
      : `http://localhost:5000/users/all/guide/${guideId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setGuideData(data.data))
      .catch((error) => console.error(error));
  }, [id, guideId]);

  if (!guideData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl text-center font-bold mb-6">
        Guide Details: <span className="text-blue-500">{guideData.name}</span>
      </h2>

      {/* Guide Profile Card */}
      <div className="flex flex-col max-w-3xl mx-auto gap-4 bg-white p-6 rounded-lg border shadow-md">
        {/* Profile Picture */}
        <img
          src={guideData.photo || "default-avatar.jpg"} // Fallback to a default image if not available
          alt={guideData.name}
          className="w-24 h-24 rounded-full object-cover border shadow-md mx-auto"
        />

        <div className="w-full md:w-[600px] mx-auto space-y-5 flex flex-col md:flex-row items-center">
          {/* Data Rows */}
          <div className="mx-10 space-y-5">
            <div className="flex flex-col items-start gap-2">
              <label>
                <h2 className="text-md font-bold">Name</h2>
              </label>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <FaUserCircle className="text-blue-500" />
                {guideData.name || "Name not available"}
              </h3>
            </div>
            <div className="flex flex-col items-start gap-2">
              <label>
                <h2 className="text-md font-bold">Email</h2>
              </label>
              <p className="text-gray-600 flex items-center gap-2">
                <FaEnvelope className="text-green-500" />
                {guideData.email || "Email not available"}
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <label>
                <h2 className="text-md font-bold">Role</h2>
              </label>
              <p className="text-gray-600 flex items-center gap-2">
                <FaBriefcase className="text-purple-500" />
                {guideData.role || "Role not available"}
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="mx-10 space-y-5">
            <div className="flex flex-col items-start gap-2">
              <label>
                <h2 className="text-md font-bold">Location</h2>
              </label>
              <p className="text-gray-600 flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                {guideData.location || "Location not available"}
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <label>
                <h2 className="text-md font-bold">Phone</h2>
              </label>
              <p className="text-gray-600 flex items-center gap-2">
                <FaPhone className="text-yellow-500" />
                {guideData.phone || "Phone not available"}
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <label>
                <h2 className="text-md font-bold">Bio</h2>
              </label>
              <p className="text-gray-600 flex items-center gap-2">
                <FaInfoCircle className="text-blue-400" />
                {guideData.bio || "Bio not available"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideDetails;

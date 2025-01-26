import useSingleUsers from "../../../Hooks/useSingleUsers";
import ManageModal from "../../../components/ManageModal.jsx/ManageModal";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaInfoCircle,
} from "react-icons/fa";

const ManageProfile = () => {
  const [singleUsers] = useSingleUsers();

  return (
    <div className="p-6">
      <h2 className="text-2xl text-center font-bold mb-6">
        Welcome, <span className="text-blue-500">{singleUsers.name}</span>!
        Manage Your Profile
      </h2>

      {/* User Profile Card */}
      <div className="flex flex-col max-w-3xl mx-auto  gap-4 bg-white p-6 rounded-lg border">
        {/* Profile Picture */}
        <img
          src={singleUsers.photo}
          alt={singleUsers.name}
          className="w-24 h-24 rounded-full object-cover border shadow-md mx-auto"
        />
        {/* Name */}
        <div className="flex justify-evenly">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FaUserCircle className="text-blue-500" />
            {singleUsers.name}
          </h3>
          {/* Email */}
          <p className="text-gray-600 flex items-center gap-2">
            <FaEnvelope className="text-green-500" />
            {singleUsers.email}
          </p>
        </div>
        {/* Role */}
        <div className="flex justify-evenly">
          <p className="text-gray-600 flex items-center gap-2">
            <FaBriefcase className="text-purple-500" />
            {singleUsers.role}
          </p>
          {/* Address */}
          <p className="text-gray-600 flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            {singleUsers.address}
          </p>
        </div>
        {/* Phone */}
        <div className="flex justify-evenly">
          <p className="text-gray-600 flex items-center gap-2">
            <FaPhone className="text-yellow-500" />
            {singleUsers.phone}
          </p>
          {/* Bio */}
          <p className="text-gray-600 flex items-center gap-2 text-center">
            <FaInfoCircle className="text-blue-400" />
            {singleUsers.bio}
          </p>
        </div>

        {/* Edit Button */}
        <button
          onClick={() => document.getElementById("my_modal_4").showModal()}
          className="btn btn-primary btn-sm w-40 mx-auto mt-4"
        >
          Edit Profile
        </button>
      </div>
      <ManageModal />
    </div>
  );
};

export default ManageProfile;

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
        Welcome,{" "}
        <span className="text-blue-500">{singleUsers?.name || "User"}</span>!
        Manage Your Profile
      </h2>

      {/* User Profile Card */}
      <div className="flex flex-col max-w-3xl mx-auto gap-4 bg-white p-6 rounded-lg border">
        {/* Profile Picture */}
        <img
          src={singleUsers?.photo || "https://via.placeholder.com/150"}
          alt={singleUsers?.name || "User Photo"}
          className="w-24 h-24 rounded-full object-cover border shadow-md mx-auto"
        />

        {/* Data Rows */}
        <div className="w-full md:w-[600px] mx-auto space-y-5 flex flex-col md:flex-row items-center">
          {/* First Column */}
          <div className="mx-10 space-y-5">
            {/* Name */}
            <div className="flex flex-col items-start gap-2">
              <label>
                <h2 className="text-md font-bold">Name</h2>
              </label>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <FaUserCircle className="text-blue-500" />
                {singleUsers?.name || "Name not available"}
              </h3>
            </div>
            {/* Email */}
            <div className="flex flex-col items-start gap-2">
              <label>
                <h2 className="text-md font-bold">Email</h2>
              </label>
              <p className="text-gray-600 flex items-center gap-2">
                <FaEnvelope className="text-green-500" />
                {singleUsers?.email || "Email not available"}
              </p>
            </div>
            {/* Role */}
            <div className="flex flex-col items-start gap-2">
              <label>
                <h2 className="text-md font-bold">Role</h2>
              </label>
              <p className="text-gray-600 flex items-center gap-2">
                <FaBriefcase className="text-purple-500" />
                {singleUsers?.role || "Role not available"}
              </p>
            </div>
          </div>

          {/* Second Column */}
          <div className="mx-10 space-y-5">
            {/* Location */}
            <div className="flex flex-col items-start gap-2">
              <label>
                <h2 className="text-md font-bold">Location</h2>
              </label>
              <p className="text-gray-600 flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                {singleUsers?.address || "Address not available"}
              </p>
            </div>
            {/* Phone */}
            <div className="flex flex-col items-start gap-2">
              <label>
                <h2 className="text-md font-bold">Phone</h2>
              </label>
              <p className="text-gray-600 flex items-center gap-2">
                <FaPhone className="text-yellow-500" />
                {singleUsers?.phone || "Phone not available"}
              </p>
            </div>
            {/* Bio */}
            <div className="flex flex-col items-start gap-2">
              <label>
                <h2 className="text-md font-bold">Bio</h2>
              </label>
              <p className="text-gray-600 flex items-center gap-2">
                <FaInfoCircle className="text-blue-400" />
                {singleUsers?.bio || "Bio not available"}
              </p>
            </div>
          </div>
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

// import { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaInfoCircle,
} from "react-icons/fa";
import ManageModal from "../../../components/ManageModal.jsx/ManageModal";
import useSingleUsers from "../../../Hooks/useSingleUsers";

const ManageProfile = () => {
  const [singleUsers] = useSingleUsers();

  return (
    <div className="p-6">
      <h2 className="text-2xl text-center font-bold mb-6">
        Welcome,{" "}
        <span className="text-blue-500">{singleUsers?.name || "User"}</span>!
        Manage Your Profile
      </h2>

      {/* Profile Card */}
      <div className="max-w-3xl mx-auto gap-4 bg-white p-6 rounded-lg border">
        <div className="w-full border md:w-[600px] mx-auto space-y-5  flex-col md:flex-row   shadow-lg p-4">
          {/* Left side: Profile Picture (o) */}
          <div className=" ">
            <img
              src={singleUsers?.photo || "https://via.placeholder.com/150"}
              alt={singleUsers?.name || "User Photo"}
              className="w-24 h-24 rounded-full object-cover border shadow-md mx-auto"
            />
            <div className="text-center mt-4">
              <button
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
                className="btn btn-primary btn-sm w-40 mx-auto mt-4"
              >
                Edit Profile
              </button>
            </div>
          </div>

          {/* Right side: User Information (Text fields) */}
          <div className="flex justify-evenly">
            <div>
              {/* Name */}
              <div>
                <label className="font-bold text-md">Name</label>
                <p className="text-xl flex items-center gap-2">
                  <FaUserCircle className="text-blue-500" />
                  {singleUsers?.name || "Name not available"}
                </p>
              </div>

              {/* Email */}
              <div>
                <label className="font-bold text-md">Email</label>
                <p className="text-gray-600 flex items-center gap-2">
                  <FaEnvelope className="text-green-500" />
                  {singleUsers?.email || "Email not available"}
                </p>
              </div>

              {/* Role */}
              <div>
                <label className="font-bold text-md">Role</label>
                <p className="text-gray-600 flex items-center gap-2">
                  <FaBriefcase className="text-purple-500" />
                  {singleUsers?.role || "Role not available"}
                </p>
              </div>
            </div>

            {/* Location dddevide */}
            <div>
              <div>
                <label className="font-bold text-md">Location</label>
                <p className="text-gray-600 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" />
                  {singleUsers?.address || "Address not available"}
                </p>
              </div>

              {/* Phone */}
              <div>
                <label className="font-bold text-md">Phone</label>
                <p className="text-gray-600 flex items-center gap-2">
                  <FaPhone className="text-yellow-500" />
                  {singleUsers?.phone || "Phone not available"}
                </p>
              </div>

              {/* Bio */}
              <div>
                <label className="font-bold text-md">Bio</label>
                <p className="text-gray-600 flex items-center gap-2">
                  <FaInfoCircle className="text-blue-400" />
                  {singleUsers?.bio || "Bio not available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for managing profile */}
      <ManageModal />
    </div>
  );
};

export default ManageProfile;

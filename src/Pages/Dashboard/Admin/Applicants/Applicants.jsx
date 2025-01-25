import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Applicants = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axiosSecure.get("/applications");
        setApplications(res.data);
      } catch (error) {
        console.error("Error fetching applications:", error);
        Swal.fire("Error!", "Failed to fetch applications.", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [axiosSecure]);

  // Handle Accept Action
  const handleAccept = async (application) => {
    try {
      const res = await axiosSecure.put(
        `/applications/accept/${application._id}`,
        { userEmail: application?.userDetails?.email }
      );

      if (res.data.modifiedCount > 0) {
        setApplications((prev) =>
          prev.filter((app) => app._id !== application._id)
        );
        Swal.fire("Success!", "The application has been accepted.", "success");
      } else {
        throw new Error("Failed to accept the application.");
      }
    } catch (error) {
      console.error("Error accepting application:", error);
      Swal.fire("Error!", "Failed to accept the application.", "error");
    }
  };

  // Handle Reject Action
  const handleReject = async (id) => {
    try {
      const res = await axiosSecure.delete(`/applications/reject/${id}`);
      if (res.data.deletedCount > 0) {
        setApplications((prev) => prev.filter((app) => app._id !== id));
        Swal.fire("Success!", "The application has been rejected.", "success");
      } else {
        throw new Error("Failed to reject the application.");
      }
    } catch (error) {
      console.error("Error rejecting application:", error);
      Swal.fire("Error!", "Failed to reject the application.", "error");
    }
  };

  // Render Loader if Data is Loading
  if (loading) {
    return (
      <div className="text-center mt-10">
        <button className="btn btn-square loading"></button>
        <p className="mt-4">Loading applications...</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* Table Head */}
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {applications.length > 0 ? (
            applications.map((application) => (
              <tr key={application._id}>
                {/* Photo */}
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={
                          application.userDetails?.photo ||
                          "https://via.placeholder.com/150"
                        }
                        alt={application.userDetails?.name || "User Avatar"}
                      />
                    </div>
                  </div>
                </td>

                {/* Name */}
                <td>{application.userDetails?.name || "N/A"}</td>

                {/* Role */}
                <td>{application.userDetails?.role || "N/A"}</td>

                {/* Email */}
                <td>{application.userDetails?.email || "N/A"}</td>

                {/* Actions */}
                <td>
                  <div className="flex gap-2">
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() =>
                        Swal.fire(
                          "Details",
                          `Title: ${application.data?.title}\n\nMotivation: ${application.data?.motivation}`,
                          "info"
                        )
                      }
                    >
                      Details
                    </button>
                    <button
                      onClick={() => handleAccept(application)}
                      className="btn btn-success btn-xs"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(application._id)}
                      className="btn btn-error btn-xs"
                    >
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No applications found.
              </td>
            </tr>
          )}
        </tbody>

        {/* Table Footer */}
        <tfoot>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Applicants;

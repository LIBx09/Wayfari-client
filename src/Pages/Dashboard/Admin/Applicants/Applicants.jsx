import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const Applicants = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(0);
  const applicationPerPage = 5;

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
        toast.error("Failed to accept the application.");
      }
    } catch (error) {
      Swal.fire("Error!", "Failed to accept the application.", error);
    }
  };

  const handleReject = async (id) => {
    try {
      const res = await axiosSecure.delete(`/applications/reject/${id}`);
      if (res.data.deletedCount > 0) {
        setApplications((prev) => prev.filter((app) => app._id !== id));
        Swal.fire("Success!", "The application has been rejected.", "success");
      } else {
        toast.error("Failed to reject the application.");
      }
    } catch (error) {
      Swal.fire("Error!", "Failed to reject the application.", error);
    }
  };

  const offset = currentPage * applicationPerPage;
  const paginatedApplication = applications.slice(
    offset,
    offset + applicationPerPage
  );

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
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
    <>
      <Helmet>
        <title>Application || Wayfari</title>
      </Helmet>
      <SectionTitle heading="Application for Guide" />
      <div className="overflow-x-auto w-10/12 mx-auto">
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
            {paginatedApplication.length > 0 ? (
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
                        className="btn btn-accent btn-xs"
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
              <td colSpan="5" className="text-center">
                <div className="my-4">
                  <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    pageCount={Math.ceil(
                      applications.length / applicationPerPage
                    )} // Total pages
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageChange}
                    containerClassName="flex justify-center items-center gap-2"
                    pageLinkClassName="px-3 py-1 border rounded-md text-blue-600 border-blue-400 hover:bg-blue-500 hover:text-white transition"
                    activeLinkClassName="bg-blue-200 text-white"
                    previousLinkClassName="px-3 py-1 border rounded-md text-blue-600 border-blue-400 hover:bg-blue-500 hover:text-white transition"
                    nextLinkClassName="px-3 py-1 border rounded-md text-blue-600 border-blue-400 hover:bg-blue-500 hover:text-white transition"
                    breakLinkClassName="px-3 py-1 text-blue-600"
                    disabledLinkClassName="opacity-50 cursor-not-allowed"
                  />
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Applicants;

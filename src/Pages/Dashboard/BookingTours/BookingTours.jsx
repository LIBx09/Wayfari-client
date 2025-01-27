/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useBookingDB from "../../../Hooks/useBookingDB";
import useGuide from "../../../Hooks/useguide";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const BookingTours = () => {
  const { width, height } = useWindowSize();
  const [bookings, refetch] = useBookingDB();
  const [showModal, setShowModal] = useState(false);
  const [isGuide] = useGuide();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  // const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(bookings.length / itemsPerPage);

  const currentBookings = bookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCancel = async (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/bookings/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };

  useEffect(() => {
    if (bookings.length === 3) {
      setShowModal(true);
    }
  }, [bookings]);

  const handleStatusChange = async (id, status) => {
    const confirmationMessage =
      status === "accepted"
        ? "Are you sure you want to accept this booking?"
        : "Are you sure you want to reject this booking?";

    // Confirmation dialog
    Swal.fire({
      title: "Confirmation",
      text: confirmationMessage,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: status === "accepted" ? "#4caf50" : "#f44336",
      cancelButtonColor: "#d33",
      confirmButtonText: status === "accepted" ? "Yes, Accept" : "Yes, Reject",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.patch(`/bookings/status/${id}`, {
            status,
          });

          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Updated!",
              text:
                status === "accepted"
                  ? "The booking has been accepted."
                  : "The booking has been rejected.",
              icon: "success",
            });
          } else {
            toast.error("Failed to update booking status");
          }

          refetch();
        } catch (error) {
          toast.error("An error occurred while updating booking status");
          console.error(error);
        }
      }
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <SectionTitle heading="Bookings" subHeading="All Bookings here" />
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              <th># No.</th>
              <th>Package Name</th>
              <th>Tourist Info</th>
              <th>Tour Price</th>
              <th>Status</th>
              <th>Tour Date</th>
              <th>Action</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentBookings.length > 0 ? (
              currentBookings.map((book, index) => {
                const {
                  data: {
                    touristPhoto,
                    touristName,
                    touristEmail,
                    touristNumber,
                    bookingDate,
                    guideName,
                  },
                  _id,
                  packageName,
                  packagePrice,
                  status,
                } = book;

                return (
                  <tr key={book._id}>
                    <th>{index + 1}</th>
                    <td>
                      {packageName} <br /> Guide:{guideName}
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={touristPhoto} alt="Tourist Avatar" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{touristName}</div>
                          <div className="text-sm opacity-50">
                            {touristEmail}
                          </div>
                          <div className="text-sm">{touristNumber}</div>
                        </div>
                      </div>
                    </td>
                    <td>${packagePrice}</td>
                    <td>
                      <span
                        className={`badge ${
                          status === "pending"
                            ? "badge-warning"
                            : status === "in-review"
                            ? "bg-blue-500"
                            : status === "accepted"
                            ? "bg-green-500"
                            : status === "rejected"
                            ? "bg-red-500"
                            : ""
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td>{bookingDate}</td>
                    {!isGuide && (
                      <>
                        <td>
                          {["in-review", "accepted", "rejected"].includes(
                            status
                          ) ? (
                            <button disabled className="btn btn-xs">
                              Pay
                            </button>
                          ) : (
                            <Link to={`/dashboard/payment?booking=${_id}`}>
                              <button className="btn btn-primary btn-xs">
                                Pay
                              </button>
                            </Link>
                          )}
                        </td>
                        <td>
                          {status === "pending" ? (
                            <button
                              onClick={() => handleCancel(_id)}
                              className="btn btn-error btn-xs"
                            >
                              Cancel
                            </button>
                          ) : (
                            <button disabled className="btn btn-error btn-xs">
                              Cancel
                            </button>
                          )}
                        </td>
                      </>
                    )}
                    {isGuide && (
                      <>
                        <td>
                          {status === "pending" || status === "rejected" ? (
                            <button disabled className="btn btn-ghost btn-xs">
                              Accept
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                handleStatusChange(_id, "accepted")
                              }
                              className={`btn btn-xs ${
                                status === "accepted"
                                  ? "btn-success"
                                  : "btn-ghost"
                              }`}
                            >
                              Accept
                            </button>
                          )}
                        </td>
                        <td>
                          {status === "pending" ? (
                            <button
                              onClick={() =>
                                handleStatusChange(_id, "rejected")
                              }
                              className={`btn btn-xs ${
                                status === "rejected"
                                  ? "btn-error"
                                  : "btn-ghost"
                              }`}
                            >
                              Reject
                            </button>
                          ) : (
                            <button disabled className="btn btn-warning btn-xs">
                              Reject
                            </button>
                          )}
                        </td>
                      </>
                    )}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No bookings available.
                </td>
              </tr>
            )}
          </tbody>
          {/* Table Footer */}
          <tfoot className=""></tfoot>
        </table>
      </div>
      <div className="flex justify-center items-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`btn btn-sm mx-1 ${
              currentPage === index + 1 ? "btn-primary" : "btn-ghost"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {!isGuide && showModal && (
        <>
          <Confetti width={width} height={height} />
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Congratulations!</h2>
              <p>
                You’ve booked 3 tours! Enjoy a 10% discount on your next
                booking.
              </p>
              <button className="btn btn-primary mt-4" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </>
      )}
      {!isGuide && (
        <div className="text-center mt-10 bg-gradient-to-r from-blue-500 to-green-500 p-6 rounded-lg shadow-lg">
          <div className="flex justify-center items-center text-white mb-4">
            <FaMapMarkedAlt className="text-4xl mr-3" />
            <h2 className="text-3xl font-extrabold">Become a Tour Guide!</h2>
          </div>
          <p className="mb-6 text-gray-100 text-lg">
            Ready to share your passion for travel? Join our team and help
            travelers create lifelong memories.
          </p>
          <Link to="/dashboard/joinGuide">
            <button className="btn ml-4 md:ml-24 btn-primary btn-lg flex items-center gap-2">
              Apply Now <MdArrowForward />
            </button>
          </Link>
        </div>
      )}
      {/* <CheckoutForm /> */}
    </>
  );
};

export default BookingTours;

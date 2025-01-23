/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useBookingDB from "../../../Hooks/useBookingDB";
import useGuide from "../../../Hooks/useguide";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const BookingTours = () => {
  const [bookings, refetch] = useBookingDB();
  const [showModal, setShowModal] = useState(false);
  const [isGuide] = useGuide();
  const axiosSecure = useAxiosSecure();
  // const navigate = useNavigate();

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
      confirmButtonColor: status === "accepted" ? "#4caf50" : "#f44336", // Green for accept, red for reject
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
            {bookings.length > 0 ? (
              bookings.map((book, index) => {
                const {
                  data: {
                    touristPhoto,
                    touristName,
                    touristEmail,
                    touristNumber,
                    bookingDate,
                  },
                  _id,
                  packageName,
                  packagePrice,
                  status,
                } = book;

                return (
                  <tr key={book._id}>
                    <th>{index + 1}</th>
                    <td>{packageName}</td>
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
                            : "badge-success"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td>{bookingDate}</td>
                    {!isGuide && (
                      <>
                        <td>
                          {status === "in-review" ? (
                            <button disabled className="btn  btn-xs">
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
                          <button className="btn btn-error btn-xs">
                            Delete
                          </button>
                        </td>
                      </>
                    )}
                    {isGuide && (
                      <>
                        <td>
                          {status === "pending" ? (
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
                          <button
                            onClick={() => handleStatusChange(_id, "rejected")}
                            className={`btn btn-xs ${
                              status === "rejected" ? "btn-error" : "btn-ghost"
                            }`}
                          >
                            Reject
                          </button>
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
          <tfoot>
            <tr>
              <th colSpan="6" className="text-center">
                End of Bookings
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Congratulations!</h2>
            <p>
              You’ve booked 3 tours! Enjoy a 10% discount on your next booking.
            </p>
            <button className="btn btn-primary mt-4" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
      {/* <CheckoutForm /> */}
    </>
  );
};

export default BookingTours;

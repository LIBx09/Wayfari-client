/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useBookingDB from "../../../Hooks/useBookingDB";
import useGuide from "../../../Hooks/useguide";
import { Link } from "react-router-dom";
// import CheckoutForm from "../Payment/CheckoutForm";

const BookingTours = () => {
  const [bookings] = useBookingDB();
  const [showModal, setShowModal] = useState(false);
  const [isGuide] = useGuide();
  // const navigate = useNavigate();

  useEffect(() => {
    if (bookings.length === 3) {
      setShowModal(true);
    }
  }, [bookings]);

  // const handlePayClick = (booking) => {
  //   navigate(`/payment?bookingId=${booking._id}`);
  // };

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
                    <td>
                      <Link
                        to={`/dashboard/payment?bookingPrice=${packagePrice}`}
                      >
                        <button className="btn btn-primary btn-xs">Pay</button>
                      </Link>
                    </td>
                    <td>
                      <button className="btn btn-error btn-xs">Delete</button>
                    </td>
                    {isGuide && (
                      <>
                        <td>
                          {status === "pending" ? (
                            <button disabled className="btn btn-ghost btn-xs">
                              Accept
                            </button>
                          ) : (
                            <button className="btn btn-ghost btn-xs">
                              Accept
                            </button>
                          )}
                        </td>
                        <td>
                          <button className="btn btn-ghost btn-xs">
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

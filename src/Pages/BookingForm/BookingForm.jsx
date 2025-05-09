import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useGuideUsers from "../../Hooks/useGuideUsers";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const BookingForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  const [guideUsers] = useGuideUsers();
  const { user } = useAuth();
  // const navigate = useNavigate();
  const [packageDetails, setPackageDetails] = useState([]);
  const { _id, tourPlaceName, price } = packageDetails;

  useEffect(() => {
    const tourDetail = JSON.parse(localStorage.getItem("packageDetails"));
    setPackageDetails(tourDetail);
  }, []);

  const { register, handleSubmit, setValue, reset } = useForm();

  const onSubmit = (data) => {
    const bookingInfo = {
      data,
      status: "pending",
      packageId: _id,
      packageName: tourPlaceName,
      packagePrice: price,
    };

    axiosSecure.post("/bookings", bookingInfo).then((res) => {
      if (res.data.insertedId) {
        reset();
        Swal.fire({
          title: "Successfully booked a guide",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `,
        });
      }
    });
    // navigate("/dashboard/bookings");
  };

  return (
    <>
      <div>
        <SectionTitle heading="book your trip" subHeading="---Book Now---" />
        <div className="w-10/12 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <label className="form-control w-full mb-6">
              <div className="label">
                <span className="label-text">Photo</span>
              </div>
              <input
                type="url"
                {...register("touristPhoto", { required: true })}
                defaultValue={user?.photoURL}
                // placeholder="Recipe Name"
                className="input input-bordered w-full"
                readOnly
              />
            </label>
            <div className="flex flex-col md:flex-row gap-4">
              <label className="form-control w-full mb-6">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  {...register("touristName", { required: true })}
                  defaultValue={user?.displayName}
                  // placeholder="Recipe Name"
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
              <label className="form-control w-full mb-6">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  type="email"
                  {...register("touristEmail", { required: true })}
                  defaultValue={user?.email}
                  // placeholder="Recipe Name"
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>
            <div className="flex flex-col md:flex-row gap-4 ">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Booking Date</span>
                </div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    setValue("bookingDate", date);
                  }}
                  dateFormat="yyyy/MM/dd"
                  className="input w-full border"
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={15}
                  placeholderText="Pick a date"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Price</span>
                </div>
                <input
                  {...register("price", { required: true })}
                  // defaultValue={price}
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full "
                  value={price}
                />
              </label>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-5">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Select Guide</span>
                </div>
                <select
                  {...register("guideName", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled value="default">
                    Select Guide
                  </option>
                  {guideUsers.map((guideName) => (
                    <option key={guideName._id} value={guideName.name}>
                      {guideName.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Contact Number</span>
                </div>
                <input
                  {...register("touristNumber", { required: true })}
                  type="number"
                  placeholder="Your number"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            {user?.email ? (
              <button className="btn btn-primary w-full">Book Now</button>
            ) : (
              <>
                <button disabled className="btn btn-primary w-full">
                  Book Now{" "}
                </button>
                <span>
                  Please sign in to active book now button.{" "}
                  <Link to="/signIn" className="underline">
                    SingIn
                  </Link>
                </span>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingForm;

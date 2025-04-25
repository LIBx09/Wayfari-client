/* eslint-disable no-unused-vars */
import { FaCheckCircle, FaEye, FaList } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import useBookingDB from "../../../Hooks/useBookingDB";
import ManageProfile from "../ManageProfile/ManageProfile";
import BookingTours from "../BookingTours/BookingTours";
import Chart from "../../../components/Chart/Chart";

const DashOutlet = () => {
  const [bookings] = useBookingDB();
  console.log(bookings);
  const pendingCount = bookings.filter(
    (booking) => booking.status === "pending"
  ).length;
  const inProcessCount = bookings.length - pendingCount;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:my-10">
        <div className="flex w-auto md:w-[250px] border items-center gap-4">
          <div className="flex text-white items-center justify-center h-16 w-16 bg-[#167EE6] border">
            <FaEye />
          </div>
          <div className="mr-5 ">
            <h2 className="text-black font-bold">Today View</h2>
            <p className="font-medium text-slate-800">347</p>
          </div>
        </div>
        <div className="flex w-auto  md:w-[250px] border items-center gap-4">
          <div className="flex text-white items-center justify-center h-16 w-16 bg-[#4CAF50] border">
            <FaList />
          </div>
          <div className="mr-5 ">
            <h2 className="text-black font-bold">Bookings</h2>
            <p className="font-medium text-slate-800">{bookings.length}</p>
          </div>
        </div>
        <div className="flex w-auto md:w-[250px] border items-center gap-4">
          <div className="flex text-white items-center justify-center h-16 w-16 bg-[#DA0C4D] border">
            <MdPendingActions />
          </div>
          <div className="mr-5 ">
            <h2 className="text-black font-bold">Pending</h2>
            <p className="font-medium text-slate-800">{pendingCount}</p>
          </div>
        </div>
        <div className="flex w-auto md:w-[250px] border items-center gap-4">
          <div className="flex text-white items-center justify-center h-16 w-16 bg-[#4C5CAF] border">
            <FaCheckCircle />
          </div>
          <div className="mr-5 ">
            <h2 className="text-black font-bold">In-Review</h2>
            <p className="font-medium text-slate-800">{inProcessCount}</p>
          </div>
        </div>
      </div>
      {/* <Chart /> */}
      <ManageProfile />
      <BookingTours />
    </>
  );
};

export default DashOutlet;

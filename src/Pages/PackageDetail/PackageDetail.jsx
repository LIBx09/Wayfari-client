import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaMapMarkerAlt, FaDollarSign, FaListAlt } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useGuideUsers from "../../Hooks/useGuideUsers";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const PackageDetail = () => {
  const detailPackage = useLoaderData();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { user } = useAuth();
  const [guideUsers] = useGuideUsers();

  const navigate = useNavigate();

  const {
    _id,
    dayDetail,
    price,
    spotPhotos,
    tourPlaceName,
    tourTypes,
    tripTitle,
    description,
  } = detailPackage;

  const handleBookNow = () => {
    localStorage.setItem("packageDetails", JSON.stringify(detailPackage));
    navigate("/bookingForm");
  };

  return (
    <>
      <Helmet>
        <title>Details Page || Wayfari</title>
      </Helmet>
      <div className="mx-auto w-10/12 mt-5">
        {/* Swiper for main images */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 rounded-lg overflow-hidden shadow-lg"
        >
          {spotPhotos.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                className="w-full rounded-lg h-[400px] object-cover transition-transform duration-300 hover:scale-105"
                alt={`Spot ${idx + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper mt-4"
        >
          {spotPhotos.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                className="w-full h-[100px] rounded-lg object-cover shadow-sm cursor-pointer"
                alt={`Thumbnail ${idx + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Details Section */}
        <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            {tripTitle}
          </h1>
          <h2 className="text-2xl font-semibold text-orange-500 flex items-center gap-2 mb-4">
            <FaMapMarkerAlt /> {tourPlaceName}
          </h2>
          <p className="text-lg text-gray-700 flex items-center gap-2 mb-2">
            <FaListAlt className="text-orange-500" />
            <span className="font-medium text-gray-800">Tour Type:</span>{" "}
            {tourTypes}
          </p>
          <p className="text-gray-700 text-lg mb-4">
            <span className="font-medium text-gray-800">Description:</span>{" "}
            {description}
          </p>
          <div className="text-2xl font-bold text-green-600 flex items-center gap-2 mb-6">
            <FaDollarSign />${price.toLocaleString()}
          </div>
          {user?.email ? (
            <Link to="/bookingForm">
              <button
                onClick={handleBookNow}
                className="btn bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              >
                Book Now
              </button>
            </Link>
          ) : (
            <button disabled className="btn btn-primary">
              Book Now
            </button>
          )}
        </div>

        {/* Accordion for Day Details */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Day Details</h3>
          {dayDetail.map((detail, idx) => (
            <div
              key={idx}
              className="collapse collapse-arrow bg-base-200 mb-2 rounded-lg shadow-md"
            >
              <input
                type="radio"
                name="dayDetailAccordion"
                id={`dayDetail${idx}`}
              />
              <label
                htmlFor={`dayDetail${idx}`}
                className="collapse-title text-lg font-semibold text-gray-700 flex items-center gap-2"
              >
                <span className="text-orange-500 font-bold">Day {idx + 1}</span>
              </label>
              <div className="collapse-content p-4 text-gray-600">
                <p>{detail}</p>
              </div>
            </div>
          ))}
        </div>
        <SectionTitle
          heading="Guides"
          subHeading="See your own guide details"
        ></SectionTitle>
        <div className="">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {guideUsers.map((user, idx) => (
                  <tr key={user._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={user.photo} alt="profile" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <th>
                      <Link to={`/details/${_id}/guideDetails/${user._id}`}>
                        <button className="btn  btn-xs">details</button>
                      </Link>
                    </th>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
              <tfoot></tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageDetail;

import { useEffect, useState, useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-12">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Save swiper instance to the ref
        onMouseEnter={() => swiperRef.current.autoplay.stop()} // Stop autoplay on hover
        onMouseLeave={() => swiperRef.current.autoplay.start()} // Start autoplay when mouse leaves
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex items-center justify-center">
              <div className="text-center flex flex-col items-center justify-center">
                <Rating style={{ maxWidth: 250 }} value={review.rating} />
                <p className="w-10/12 my-5">{review.details}</p>
                <h2 className="text-2xl text-orange-400">{review.name}</h2>
                <p className="font-normal">{review.location}</p>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-500">
                  {review.review}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;

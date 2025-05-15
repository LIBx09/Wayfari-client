/* eslint-disable react/prop-types */
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

import ban1 from "../../../assets/ban1.jpg";
import ban2 from "../../../assets/ban2.jpg";
import ban3 from "../../../assets/ban3.jpg";
import ban4 from "../../../assets/ban4.jpg";
import ban5 from "../../../assets/ban5.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const slidesData = [
  {
    image: ban1,
    h3: "Discover Timeless Wonders",
    h2: "Explore Historic Destinations",
    buttonText: "Learn More",
    buttonLink: "/",
  },
  {
    image: ban2,
    h3: "Journey Beyond Expectations",
    h2: "Plan Your Dream Vacation",
    buttonText: "Start Now",
    buttonLink: "/all-package",
  },
  {
    image: ban3,
    h3: "Trusted Travel Experts",
    h2: "Your Gateway to Adventure",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    image: ban4,
    h3: "Unwind in Paradise",
    h2: "Experience Luxury Escapes",
    buttonText: "Discover More",
    buttonLink: "/aboutUs",
  },
  {
    image: ban5,
    h3: "Unwind in Paradise",
    h2: "Experience Luxury Escapes",
    buttonText: "Discover More",
    buttonLink: "/Contact",
  },
];

const CenterText = ({ h3, h2, buttonText, buttonLink }) => (
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-5">
    <Fade direction="down">
      <h3 className="text-4xl font-bold mb-4">{h3}</h3>
    </Fade>
    <Fade direction="up">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-6">{h2}</h2>
    </Fade>
    <Fade direction="up" delay={200}>
      <Link to={buttonLink}>
        <button className="px-6 py-3 bg-orange-500 rounded-full text-white font-semibold hover:bg-orange-600 transition">
          {buttonText}
        </button>
      </Link>
    </Fade>
  </div>
);

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-screen"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-0"></div>

              {/* Center Text with Button */}
              <CenterText
                h3={slide.h3}
                h2={slide.h2}
                buttonText={slide.buttonText}
                buttonLink={slide.buttonLink}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

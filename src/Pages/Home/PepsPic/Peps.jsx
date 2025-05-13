// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
import pep1 from "../../../assets/pep1.png";
import pep2 from "../../../assets/pep2.png";
import pep3 from "../../../assets/pep6.png";
import pep4 from "../../../assets/pep4.png";
import pep5 from "../../../assets/pep5.png";

// Import Swiper styles
import "swiper/css";
import Location from "./Location";

// import "./styles.css";
const Peps = () => {
  return (
    <>
      <Location />
      <br />
      <Swiper
        // modules={[Autoplay]}
        // autoplay={{ delay: 3000 }}
        watchSlidesProgress={true}
        slidesPerView={5}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <img src={pep1} alt="" className="w-[250px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pep3} alt="" className="w-[250px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pep2} alt="" className="w-[250px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pep4} alt="" className="w-[250px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pep5} alt="" className="w-[250px]" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Peps;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import pep1 from "../../../assets/pep1.jpg";
import pep2 from "../../../assets/pep2.jpg";
import pep3 from "../../../assets/pep6.jpg";
import pep4 from "../../../assets/pep4.jpg";
import pep5 from "../../../assets/pep5.jpg";
import pep6 from "../../../assets/pep6.jpg";
import Location from "./Location";

const Peps = () => {
  const locations = [
    { img: pep1, name: "Cox's Bazar" },
    { img: pep2, name: "Sundarbans" },
    { img: pep3, name: "Sajek Valley" },
    { img: pep4, name: "Saint Martin's" },
    { img: pep5, name: "Bandarban" },
    { img: pep6, name: "Sylhet" },
  ];

  return (
    <>
      <Location />
      <br />
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {locations.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-60 rounded overflow-hidden">
              <img
                src={item.img}
                alt={`Pep ${index}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white text-lg font-semibold px-4 py-2">
                {item.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Peps;

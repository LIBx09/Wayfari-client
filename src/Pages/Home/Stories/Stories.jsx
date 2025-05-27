import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loading from "../../../components/Loading/Loading";
import SampleStoryCard from "./SampleStoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Stories = () => {
  const [sampleStory, setSampleStory] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/stories/sample")
      .then((res) => {
        setSampleStory(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch stories", err);
        setLoading(false);
      });
  }, [axiosPublic]);

  if (loading) return <Loading />;

  return (
    <>
      {/* Swiper Carousel for Sample Stories */}
      {sampleStory.length > 0 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {sampleStory.map((story) => (
            <SwiperSlide key={story._id}>
              <SampleStoryCard story={story} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-500 py-4">No stories found.</p>
      )}
    </>
  );
};

export default Stories;

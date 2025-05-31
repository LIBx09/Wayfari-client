import { Parallax } from "react-parallax";
import imgbg from "../../../assets/newsUpBg.jpg";
import img3 from "../../../assets/newsUp3.jpg";
import img7 from "../../../assets/newsUp7.jpg";
import img9 from "../../../assets/newsUp9.jpg";
import img10 from "../../../assets/newsUp10.jpg";
import img11 from "../../../assets/newsUp11.jpg";
import img12 from "../../../assets/newsUp12.jpg";
import img13 from "../../../assets/newsUp13.jpg";
import img14 from "../../../assets/newsUp14.jpg";
import img15 from "../../../assets/newsUp15.jpg";
import img16 from "../../../assets/newsUp16.jpg";

const posts = [
  { img: img3, title: "STANDARD BLOG POST WITH IMAGE", date: "MAY 28, 2014" },
  { img: img7, title: "AMAZING FULLWIDTH POST", date: "MAY 26, 2014" },
  { img: img9, title: "LINK POST", date: "MAY 18, 2014" },
  { img: img10, title: "QUOTE POST", date: "MAY 18, 2014" },
  { img: img11, title: "SIDEBAR POST WITH SLIDESHOW", date: "JUNE 18, 2014" },
  { img: img12, title: "DUIS VESTIBULUM QUIS QUAM", date: "JUNE 22, 2011" },
  { img: img13, title: "VIMEO VIDEO POST", date: "JUNE 22, 2011" },
  { img: img14, title: "LINK POST 2", date: "MAY 28, 2011" },
  { img: img15, title: "FEATURED POST", date: "APRIL 10, 2015" },
  { img: img16, title: "TRAVEL POST", date: "MARCH 15, 2016" },
];

const NewsAndUpdates = () => {
  return (
    <Parallax bgImage={imgbg} strength={-200} blur={{ min: -70, max: 30 }}>
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 text-center mb-10">
          NEWS & UPDATES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="relative group h-64 overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white font-bold text-sm px-2 uppercase tracking-wide">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-300 mt-1 italic">
                  ON {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Parallax>
  );
};

export default NewsAndUpdates;

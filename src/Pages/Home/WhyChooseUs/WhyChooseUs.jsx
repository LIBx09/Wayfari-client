import { Parallax } from "react-parallax";
import { FaStar, FaGlobeAmericas, FaThumbsUp } from "react-icons/fa";
import wcuBg from "../../../assets/wcuBg.jpg";

const features = [
  {
    icon: <FaStar size={24} />,
    title: "Handpicked Hotels",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
  {
    icon: <FaGlobeAmericas size={24} />,
    title: "World Class Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
  {
    icon: <FaThumbsUp size={24} />,
    title: "Best Price Guarantee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
  },
];

const WhyChooseUs = () => {
  return (
    <Parallax blur={{ min: -50, max: 50 }} bgImage={wcuBg} strength={-200}>
      <div className="min-h-[600px] flex flex-col items-center justify-center px-4 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">WHY CHOOSE US</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-lg p-6 shadow-lg relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mt-8">{feature.title}</h3>
              <p className="text-sm mt-3">{feature.description}</p>
              <button className="mt-4 text-red-600 font-semibold hover:underline">
                learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </Parallax>
  );
};

export default WhyChooseUs;

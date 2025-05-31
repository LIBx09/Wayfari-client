import { RiEmotionHappyLine } from "react-icons/ri";
import { IoBusOutline } from "react-icons/io5";
import { BsSuitcaseLg } from "react-icons/bs";
import { LuMessageCircleHeart } from "react-icons/lu";

const stats = [
  {
    icon: <RiEmotionHappyLine size={48} />,
    value: "70,101",
    label: "HAPPY CUSTOMERS",
  },
  {
    icon: <IoBusOutline size={48} />,
    value: "12,540",
    label: "TOURS COMPLETED",
  },
  {
    icon: <BsSuitcaseLg size={48} />,
    value: "8,245",
    label: "TRAVEL PACKAGES",
  },
  {
    icon: <LuMessageCircleHeart size={48} />,
    value: "5,420",
    label: "POSITIVE REVIEWS",
  },
];

const ClientStat = () => {
  return (
    <div className="w-full my-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white text-center rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-center mb-4 text-red-600">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-black">{stat.value}</div>
            <div className="text-[#B63327] italic mt-1 text-sm tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientStat;

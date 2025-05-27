/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PackageCards = ({ item }) => {
  const { tourPlaceName, tourTypes, spotPhotos, price, _id } = item;
  const firstImg = spotPhotos[0];

  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300">
      {/* Background Image */}
      <img
        src={firstImg}
        alt={tourPlaceName}
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300"></div>

      {/* Light Reflection Animation */}
      <div className="absolute top-0 left-[-150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-[-20deg] pointer-events-none transition-all duration-700 group-hover:left-[150%]"></div>

      {/* Content Overlay */}
      <div className="relative z-10 p-5 h-full flex flex-col justify-between text-white">
        <div>
          <h3 className="text-2xl font-bold">{tourPlaceName}</h3>
          <p className="text-sm">{tourTypes}</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold text-yellow-400">${price}</p>
          <Link
            to={`/details/${_id}`}
            className="text-sm font-semibold underline hover:text-blue-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCards;

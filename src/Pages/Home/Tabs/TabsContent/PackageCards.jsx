/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PackageCards = ({ item }) => {
  const { tourPlaceName, tourTypes, spotPhotos, price, _id } = item;
  const firstImg = spotPhotos[0];

  return (
    <div className=" bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden transition-all duration-300">
      {/* Image Wrapper with Hover Effects */}
      <div className="relative group w-full h-[200px] overflow-hidden">
        <img
          className="w-full h-[200px] object-cover"
          src={firstImg}
          alt={tourPlaceName}
        />

        {/* Hover Overlay Effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 opacity-0 group-hover:opacity-100 h-[200px]"></div>

        {/* Light Reflection Animation */}
        <div className="absolute top-0 left-[-150%] w-[150%] h-[200px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-[-20deg] pointer-events-none transition-all duration-700 group-hover:left-[150%]"></div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <div className="flex gap-4 items-center">
            <h3>{tourPlaceName}</h3>
            <p className="text-lg font-bold text-[#d99904] dark:text-gray-300">
              ${price}
            </p>
          </div>
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {tourTypes}
        </p>

        {/* Card Footer: Price & Button */}
        <div
          className="flex justify-end
         items-center"
        >
          <Link
            to={`/details/${_id}`}
            className="text-lg font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCards;

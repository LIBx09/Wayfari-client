import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import PackageCards from "../Home/Tabs/TabsContent/PackageCards";
import Loading from "../../components/Loading/Loading";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import bgImg from "../../assets/packageBg.jpg";

const AllPackage = () => {
  const axiosPublic = useAxiosPublic();
  const [sortBy, setSortBy] = useState("default"); // Sorting state

  const {
    data: tourPackage = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tourPackage"],
    queryFn: async () => {
      const res = await axiosPublic.get("/package");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />; // Display a loading spinner while fetching data
  }

  if (isError) {
    return (
      <p className="text-red-500 dark:text-red-400">Error: {error.message}</p>
    ); // Error message color adjusted for dark mode
  }

  // **Sorting Logic**
  const sortedPackages = [...tourPackage].sort((a, b) => {
    if (sortBy === "placeName") {
      return a.tourPlaceName.localeCompare(b.tourPlaceName);
    } else if (sortBy === "tripTitle") {
      return a.tripTitle.localeCompare(b.tripTitle);
    } else if (sortBy === "lowToHigh") {
      return parseFloat(a.price) - parseFloat(b.price); // Low to High
    } else if (sortBy === "highToLow") {
      return parseFloat(b.price) - parseFloat(a.price); // High to Low
    }
    return 0; // Default: No sorting
  });

  return (
    <div
      className="p-4  bg-white text-black bg-fixed bg-cover  dark:bg-gray-900 dark:text-white transition-colors duration-300"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Helmet>
        <title>Packages || Wayfari</title>
      </Helmet>
      <div className=" w-8/12 mx-auto p-6 rounded-md shadow-md backdrop-blur-sm bg-white/40">
        <SectionTitle
          heading="All the packages are here"
          subHeading="Choose Your Dream Destination and Book Now"
        />
      </div>

      {/* Sorting Dropdown */}
      <div className="flex w-11/12 mx-auto justify-between items-center my-6">
        <h1 className="text-2xl font-bold">Tour Packages</h1>
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="select select-bordered w-40 bg-gray-100 dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
        >
          <option value="default">Sort By</option>
          <option value="placeName">Place Name</option>
          <option value="tripTitle">Trip Title</option>
          <option value="lowToHigh">Price (Low to High)</option>
          <option value="highToLow">Price (High to Low )</option>
        </select>
      </div>

      {/* Tour Packages Grid */}
      <div className="grid w-11/12 mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedPackages.length > 0 ? (
          sortedPackages.map((item) => (
            <PackageCards key={item._id} item={item} />
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            No packages available
          </p>
        )}
      </div>
    </div>
  );
};

export default AllPackage;

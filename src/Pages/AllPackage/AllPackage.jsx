import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import PackageCards from "../Home/Tabs/TabsContent/PackageCards";
import Loading from "../../components/Loading/Loading";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useState } from "react";

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
    return <p className="text-red-500">Error: {error.message}</p>; // Display error message if the API call fails
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
    <div className="p-4 w-11/12 mx-auto">
      <Helmet>
        <title>Packages || Wayfari</title>
      </Helmet>
      <SectionTitle
        heading="All the packages are here"
        subHeading="Choose Your Dream Destination and Book Now"
      />

      {/* Sorting Dropdown */}
      <div className="flex justify-between items-center my-6">
        <h1 className="text-2xl font-bold">Tour Packages</h1>
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="select select-bordered w-40"
        >
          <option value="default">Sort By</option>
          <option value="id">ID</option>
          <option value="placeName">Place Name</option>
          <option value="tripTitle">Trip Title</option>
          <option value="lowToHigh">Price (Low to High)</option>
          <option value="highToLow">Price (High to Low )</option>
        </select>
      </div>

      {/* Tour Packages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedPackages.length > 0 ? (
          sortedPackages.map((item) => (
            <PackageCards key={item._id} item={item} />
          ))
        ) : (
          <p className="text-gray-500">No packages available</p>
        )}
      </div>
    </div>
  );
};

export default AllPackage;

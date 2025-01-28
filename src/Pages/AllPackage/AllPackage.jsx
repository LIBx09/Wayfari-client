import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import PackageCards from "../Home/Tabs/TabsContent/PackageCards";
import Loading from "../../components/Loading/Loading";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const AllPackage = () => {
  const axiosPublic = useAxiosPublic();

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

  return (
    <div className="p-4 w-10/12 mx-auto">
      <Helmet>
        <title>Packages || Wayfari</title>
      </Helmet>
      <SectionTitle
        heading="All the packages are here"
        subHeading="Choose Your Dream Destination and Booknow"
      />
      <h1 className="text-2xl font-bold mb-4">Tour Packages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tourPackage.length > 0 ? (
          tourPackage.map((item) => <PackageCards key={item._id} item={item} />)
        ) : (
          <p className="text-gray-500">No packages available</p>
        )}
      </div>
    </div>
  );
};

export default AllPackage;

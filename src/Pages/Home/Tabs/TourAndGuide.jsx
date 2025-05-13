import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import PackageCards from "./TabsContent/PackageCards";
import GuideCards from "./TabsContent/GuideCards";
import Loading from "../../../components/Loading/Loading";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const TourAndGuide = () => {
  const [packages, setPackages] = useState([]);
  const [guides, setGuides] = useState([]);
  const [loadingPackages, setLoadingPackages] = useState(true);
  const [loadingGuides, setLoadingGuides] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axiosPublic.get("/package/sample");
        setPackages(res.data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setLoadingPackages(false);
      }
    };

    const fetchGuides = async () => {
      try {
        const res = await axiosPublic.get("/users/guide/sample");
        setGuides(res.data);
      } catch (error) {
        console.error("Error fetching guides:", error);
      } finally {
        setLoadingGuides(false);
      }
    };

    fetchPackages();
    fetchGuides();
  }, [axiosPublic]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs>
        <TabList className="flex gap-4 mb-6 border-b border-gray-200 dark:border-gray-700">
          <Tab className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-200 cursor-pointer hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
            Tourist Spots
          </Tab>
          <Tab className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-200 cursor-pointer hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
            Guides
          </Tab>
        </TabList>

        <TabPanel>
          {loadingPackages ? (
            <Loading />
          ) : packages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {packages.map((item) => (
                <PackageCards key={item._id} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No tourist spots found.
            </p>
          )}
        </TabPanel>

        <TabPanel>
          {loadingGuides ? (
            <Loading />
          ) : guides.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {guides.map((guide) => (
                <GuideCards key={guide._id} guide={guide} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No guides found.
            </p>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TourAndGuide;

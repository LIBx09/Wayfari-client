import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PackageCards from "./TabsContent/PackageCards";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import GuideCards from "./TabsContent/GuideCards";
import Loading from "../../../components/Loading/Loading";

const TourAndGuide = () => {
  const [samplePackage, setSamplePackage] = useState([]);
  // console.log(samplePackage);
  const [guides, setGuide] = useState([]);
  console.log(guides);

  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/package/sample").then((res) => {
      setSamplePackage(res.data);
    });
  }, [axiosPublic]);

  useEffect(() => {
    axiosPublic.get("/users/guide/sample").then((res) => {
      setGuide(res.data);
    });
  }, [axiosPublic]);

  return (
    <Tabs>
      <div className="flex justify-between">
        <TabList>
          <Tab>Tourist Spots</Tab>
          <Tab>Guides</Tab>
        </TabList>
      </div>

      <TabPanel>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
          {samplePackage?.length > 0 ? (
            samplePackage.map((item) => (
              <PackageCards key={item._id} item={item}></PackageCards>
            ))
          ) : (
            <>
              <Loading />
            </>
          )}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="mx-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {guides?.length > 0 ? (
            guides.map((guide) => (
              <GuideCards key={guide._id} guide={guide}></GuideCards>
            ))
          ) : (
            <>
              <Loading />
            </>
          )}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default TourAndGuide;

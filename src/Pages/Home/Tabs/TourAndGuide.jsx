import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PackageCards from "./TabsContent/PackageCards";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import GuideCards from "./TabsContent/GuideCards";
import Loading from "../../../components/Loading/Loading";

const TourAndGuide = () => {
  const [samplePackage, setSamplePackage] = useState([]);
  const [guides, setGuide] = useState([]);
  //   console.log(samplePackage);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/package/sample").then((res) => {
      console.log(res.data);
      setSamplePackage(res.data);
    });
  }, [axiosPublic]);

  useEffect(() => {
    axiosPublic.get("/users/guide/limit").then((res) => {
      console.log(res.data);
      setGuide(res.data);
    });
  }, [axiosPublic]);

  return (
    <Tabs>
      <TabList>
        <Tab>Tourist Spots</Tab>
        <Tab>Guides</Tab>
      </TabList>

      <TabPanel>
        <div className="mx-20 grid grid-cols-1 md:grid-cols-3 gap-4">
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
        <div className="mx-20 grid grid-cols-1 md:grid-cols-3 gap-4">
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

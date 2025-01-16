import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PackageCards from "./TabsContent/PackageCards";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const TourAndGuide = () => {
  const [samplePackage, setSamplePackage] = useState();
  //   console.log(samplePackage);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/package/sample").then((res) => {
      console.log(res.data);
      setSamplePackage(res.data);
    });
  }, [axiosPublic]);
  //   const [tourPackage] = usePackage();
  //   console.log(tourPackage);
  return (
    <Tabs>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      <TabPanel>
        <div className="mx-20 grid grid-cols-1 md:grid-cols-3 gap-4">
          {samplePackage?.length > 0 ? (
            samplePackage.map((item) => (
              <PackageCards key={item._id} item={item}></PackageCards>
            ))
          ) : (
            <p>Loading or no packages available...</p>
          )}
        </div>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
};

export default TourAndGuide;

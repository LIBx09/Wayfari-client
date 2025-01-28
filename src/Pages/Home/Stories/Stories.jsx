import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loading from "../../../components/Loading/Loading";
import SampleStoryCard from "./SampleStoryCard";

const Stories = () => {
  const [sampleStory, setSampleStory] = useState();

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/stories/sample").then((res) => {
      setSampleStory(res.data);
    });
  }, [axiosPublic]);
  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
      {sampleStory?.length > 0 ? (
        sampleStory.map((story) => (
          <SampleStoryCard key={story._id} story={story} />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Stories;

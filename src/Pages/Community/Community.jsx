import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAllStories from "../../Hooks/useAllStories";
import useFavoriteStories from "../../Hooks/useFavoriteStories";
import SampleStoryCard from "../Home/Stories/SampleStoryCard";

const Community = () => {
  const [allStories] = useAllStories();
  const [favoriteStories] = useFavoriteStories();

  return (
    <div className="w-10/12 mx-auto">
      <Helmet>
        <title>Community || Wayfari</title>
      </Helmet>
      <SectionTitle
        heading="Community Stories"
        subHeading="Spread your tour Experience to all"
      ></SectionTitle>
      <div>
        <h2 className="text-2xl underline font-bold">My Favorite Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
          {favoriteStories.length < 0
            ? ""
            : favoriteStories.map((item) => (
                <SampleStoryCard key={item._id} story={item}></SampleStoryCard>
              ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl underline font-bold">All Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
          {allStories.map((item) => (
            <SampleStoryCard key={item._id} story={item}></SampleStoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;

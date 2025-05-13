import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAllStories from "../../Hooks/useAllStories";
import useFavoriteStories from "../../Hooks/useFavoriteStories";
import SampleStoryCard from "../Home/Stories/SampleStoryCard";
import storyBG from "../../assets/storybg.jpg";

const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Community = () => {
  const [allStories] = useAllStories();
  const [favoriteStories] = useFavoriteStories();

  return (
    <div
      className="w-full min-h-screen bg-cover bg-fixed bg-center bg-no-repeat py-12"
      style={{ backgroundImage: `url(${storyBG})` }}
    >
      <Helmet>
        <title>Community || Wayfari</title>
      </Helmet>

      <div className="w-11/12 md:w-10/12 mx-auto backdrop-blur-sm bg-white/30 p-6 rounded-md shadow-md">
        <SectionTitle
          heading="Community Stories"
          subHeading="Spread your tour experience to inspire others"
        />

        {/* Favorite Stories */}
        <motion.div
          variants={fadeVariant}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold underline text-primary mb-4">
            My Favorite Stories
          </h2>
          {favoriteStories?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteStories.map((item) => (
                <SampleStoryCard key={item._id} story={item} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 italic mt-2">
              You haven’t added any stories to your favorites yet.
            </p>
          )}
        </motion.div>

        {/* All Stories */}
        <motion.div
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold underline text-primary mb-4">
            All Community Stories
          </h2>
          {allStories?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allStories.map((item) => (
                <SampleStoryCard key={item._id} story={item} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 italic mt-2">
              No community stories available at the moment.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Community;

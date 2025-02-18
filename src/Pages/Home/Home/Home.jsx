import Banner from "../Banner/Banner";
import Stories from "../Stories/Stories";
import TourAndGuide from "../Tabs/TourAndGuide";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import ParallaxContent from "../ParallaxContent/ParallaxContent";
import OverviewSection from "../OverviewSection/OverviewSection";
import Framer from "../Framer/Framer";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Home || Wayfari</title>
      </Helmet>
      <section>
        <Banner />
      </section>
      {/* todo here one more section need to added */}
      <section>
        <SectionTitle
          heading="Packages and Guides"
          subHeading="Choose your Desire Packages"
        />
        <TourAndGuide />
      </section>
      <section>
        <SectionTitle heading="Overview" subHeading="" />
        <OverviewSection />
      </section>
      <section className="">
        <SectionTitle heading="Overview" subHeading="" />
        <Framer />
      </section>

      <section>
        <SectionTitle
          heading="Parallax"
          subHeading="You can Love Share and add to the favorite list"
        />
        <ParallaxContent />
      </section>
      <section>
        <SectionTitle
          heading="Random Stories"
          subHeading="You can Love Share and add to the favorite list"
        />
        <Stories />
      </section>
    </div>
  );
};

export default Home;

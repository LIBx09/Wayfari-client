import Banner from "../Banner/Banner";
import Stories from "../Stories/Stories";
import TourAndGuide from "../Tabs/TourAndGuide";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import ParallaxContent from "../ParallaxContent/ParallaxContent";
import OverviewSection from "../OverviewSection/OverviewSection";
import Framer from "../Framer/Framer";
import travel from "../../../assets/travel.JPG";

const Home = () => {
  return (
    <div>
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
      <section className="w-10/12 mx-auto">
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

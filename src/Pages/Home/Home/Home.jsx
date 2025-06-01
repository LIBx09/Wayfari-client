import Banner from "../Banner/Banner";
import Stories from "../Stories/Stories";
import TourAndGuide from "../Tabs/TourAndGuide";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import ParallaxContent from "../ParallaxContent/ParallaxContent";
import OverviewSection from "../OverviewSection/OverviewSection";
import Framer from "../Framer/Framer";
import FeatureGallery from "../FeatureGallery/FeatureGallery";
import Review from "../../../components/Review/Review";
import Peps from "../PepsPic/Peps";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import ClientStat from "../ClientStat/ClientStat";
import NewsAndUpdates from "../NewsAndUpdates/NewsAndUpdates";
import SpecialOffers from "../SpecialOffers/SpecialOffers";

const Home = () => {
  return (
    <div className="w-12/12 mx-auto">
      <Helmet>
        <title>Home || Wayfari</title>
      </Helmet>
      <section className="my-15">
        <Banner />
      </section>

      <section className="mb-10">
        <SectionTitle
          heading="Random Stories"
          subHeading="You can Love Share and add to the favorite list"
        />
        <Stories />
      </section>
      <section className="">
        <SectionTitle heading="Let's Go" subHeading="Feature Packages" />
        <FeatureGallery />
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
        <SectionTitle
          heading="Why Choose Us"
          subHeading="We are the best in the business"
        />
        <WhyChooseUs />
      </section>
      <section className="">
        <SectionTitle
          heading="Let's Go"
          subHeading="We are just waiting for you"
        />
        <Framer />
      </section>
      <section>
        <ClientStat />
      </section>
      <section>
        <NewsAndUpdates />
      </section>
      <section className="mb-10">
        <SectionTitle
          heading="Special Offers"
          subHeading="Look at our special offers and discounts"
        />
        <SpecialOffers />
      </section>
      <section>
        <SectionTitle
          heading="Overview"
          subHeading="You can get The idea about our site"
        />
        <OverviewSection />
      </section>

      <section>
        <SectionTitle
          heading="Parallax"
          subHeading="You can Love Share and add to the favorite list"
        />
        <ParallaxContent />
      </section>
      <section className="mb-10 mt-48">
        <Peps />
      </section>
      <section className="mb-10">
        <SectionTitle heading="reviews" subHeading="What's Our Client Say" />
        <Review />
      </section>
    </div>
  );
};

export default Home;

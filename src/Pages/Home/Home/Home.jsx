import Banner from "../Banner/Banner";
import TourAndGuide from "../Tabs/TourAndGuide";

const Home = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      {/* todo here one more section need to added */}
      <section>
        <TourAndGuide />
      </section>
    </div>
  );
};

export default Home;

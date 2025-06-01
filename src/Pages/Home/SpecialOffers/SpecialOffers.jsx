import { Parallax } from "react-parallax";
import percent from "../../../assets/31per.png";
import bg from "../../../assets/ban1.jpg";

const SpecialOffers = () => {
  return (
    <div>
      <Parallax blur={{ min: -50, max: 50 }} bgImage={bg} strength={-200}>
        <div className="hero  min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img src={percent} className="max-w-sm rounded-lg " />
            <div>
              <h1 className="text-5xl font-bold">Last Minute Offer!</h1>
              <p className="py-6">
                Aerial view of Cape Town with Cape Town Stadium
              </p>
              <p className="pb-6 w-[500px]">
                Lorem ipsum dolor sit amet. Lorem Ipsn gravida. Pro ain gravida
                nibh vel velit an auctor aliqueenean ollicitudin ain gravida
                nibh vel version an ipsum. Lorem ipsim dolor sit amet auctor
                aliqueenean ollicitudin.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default SpecialOffers;

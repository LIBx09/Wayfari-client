import img from "../../../assets/parallax.PNG";
import { Parallax } from "react-parallax";

const ParallaxContent = () => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero justify-center h-[600px] mb-10">
        <div className="text-white"></div>
        <div className="hero-content text-white text-center ">
          <div className="mx-10 my-10 hero-overlay bg-opacity-60 p-10 md:w-[800px]">
            <h1 className="mb-5 text-5xl font-bold">With Tour Life Is Good</h1>
            <p className="mb-5 md:w-[600px] font-bold  mx-auto">
              Don&apos;t waste Your Holiday by Staying Home.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxContent;

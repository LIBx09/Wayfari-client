import fea1 from "../../../assets/fea_twilightgg1.jpg";
import fea2 from "../../../assets/fea_baligg1.jpg";
import fea3 from "../../../assets/fea_coastoceangg3.jpg";
import fea4 from "../../../assets/fea_hotairgg4.jpg";
import fea5 from "../../../assets/fea_londongg5.jpg";

const FeatureGallery = () => {
  const images = [
    {
      src: fea1,
      title: "Twilight City",
      desc: "A stunning view of the city at dusk.",
      span: "col-span-2 row-span-2",
    }, // Large image
    {
      src: fea2,
      title: "Bali Paradise",
      desc: "Experience the exotic beaches of Bali.",
      span: "col-span-1 row-span-1",
    },
    {
      src: fea3,
      title: "Coastal Ocean",
      desc: "The serene blue waters of the ocean.",
      span: "col-span-1 row-span-1",
    },
    {
      src: fea4,
      title: "Hot Air Balloon",
      desc: "Soaring high above the landscapes.",
      span: "col-span-1 row-span-1",
    },
    {
      src: fea5,
      title: "London Vibes",
      desc: "Discover the historic beauty of London.",
      span: "col-span-1 row-span-1",
    },
    {
      src: fea5,
      title: "London Vibes",
      desc: "Discover the historic beauty of London.",
      span: "col-span-1 row-span-1",
    },
  ];

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2">
      {images.map((img, index) => (
        <div
          key={index}
          className={`${img.span} overflow-hidden relative group`}
        >
          {/* Image */}
          <img
            src={img.src}
            alt={`grid-img-${index}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Text Overlay - Positioned at the Bottom */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent text-white p-3">
            <h2 className="text-lg font-semibold">{img.title}</h2>
            <p className="text-sm">{img.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureGallery;

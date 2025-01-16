/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="space-y-3 my-10 md:w-4/12 mx-auto text-center">
      <p className="text-[#d99904]">---{subHeading}---</p>
      <h2 className="uppercase border-y-2 border-neutral-400  py-3">
        {heading}{" "}
      </h2>
    </div>
  );
};

export default SectionTitle;

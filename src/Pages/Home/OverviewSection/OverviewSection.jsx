const OverviewSection = () => {
  return (
    <div className="flex items-center mx-5 flex-col md:flex-row gap-10">
      <div className="flex-1 ">
        <h2 className="text-2xl font-bold">
          21 Years of Experience in the Tourism Business
        </h2>
        <p className="mt-4  text-gray-700 dark:text-slate-500">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable. There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration in some form, by
          injected humour, or randomised words which don&apos;t look even
          slightly believable. There are many variations of passages of Lorem
          Ipsum available, but the majority have suffered alteration in some
          form, by injected humour, or randomised words which don&apos;t look
          even slightly believable.
        </p>
      </div>
      <div className="flex-1">
        <iframe
          width="100%" // Ensures full width responsiveness
          height="315"
          src="https://www.youtube.com/embed/Scxs7L0vhZ4?si=XapaotiS6o6NAVlS"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default OverviewSection;

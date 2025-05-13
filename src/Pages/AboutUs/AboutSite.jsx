const AboutSite = () => {
  return (
    <div className="bg-base-100 text-base-content px-4 md:px-10 lg:px-24 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">About Wayfari Tourism</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Discover the world with us. At Wayfari Tourism, we believe travel is
          more than just sightseeing — it&apos;s about connecting with cultures,
          creating memories, and exploring with purpose.
        </p>
      </div>

      {/* Mission and Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-2 text-primary">
            Our Mission
          </h3>
          <p>
            Our mission is to offer unique, authentic, and sustainable travel
            experiences that connect travelers with the heart of every
            destination. We aim to empower local communities and promote
            responsible tourism.
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-2 text-primary">
            Our Vision
          </h3>
          <p>
            To be a trusted global brand in tourism that inspires people to
            explore the world responsibly, while making a positive impact on the
            places we visit and the people we meet.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-center">
          What We Value
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Authenticity",
              desc: "We provide real, unfiltered experiences that immerse travelers in local culture and life.",
            },
            {
              title: "Sustainability",
              desc: "We focus on eco-friendly practices and support local businesses and communities.",
            },
            {
              title: "Customer Commitment",
              desc: "We put our travelers at the center of everything, ensuring safety, comfort, and satisfaction.",
            },
          ].map((value, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow"
            >
              <h4 className="text-xl font-bold mb-2 text-primary">
                {value.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Meet Our Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Sarah Ahmed",
              role: "Founder & CEO",
              image: "https://i.pravatar.cc/150?img=32",
            },
            {
              name: "Jamir Uddin",
              role: "Tour Manager",
              image: "https://i.pravatar.cc/150?img=45",
            },
            {
              name: "Anika Chowdhury",
              role: "Travel Guide",
              image: "https://i.pravatar.cc/150?img=12",
            },
            {
              name: "Tariq Hasan",
              role: "Operations Head",
              image: "https://i.pravatar.cc/150?img=28",
            },
          ].map((member, i) => (
            <div key={i} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full shadow-md mb-3"
              />
              <h4 className="font-bold text-lg">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSite;

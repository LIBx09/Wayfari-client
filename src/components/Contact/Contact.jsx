import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLink } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 mb-10">
          I’d love to hear from you! Whether you have a question or just want to
          say hello, feel free to reach out.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Links */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaLink className="text-2xl text-blue-500" />
              <a
                href="https://visa-navigator-6e2d7.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-600 hover:underline"
                aria-label="Visit Visa Navigator"
              >
                https://visa-navigator-6e2d7.web.app/
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaLink className="text-2xl text-green-500" />
              <a
                href="https://timekeeper-s-archive.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-green-600 hover:underline"
                aria-label="Visit Timekeeper's Archive"
              >
                https://timekeeper-s-archive.web.app/
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaLink className="text-2xl text-red-500" />
              <a
                href="https://ling-guru.web.app/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-red-600 hover:underline"
                aria-label="Visit Ling Guru"
              >
                https://ling-guru.web.app/about
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaPhone className="text-2xl text-blue-500" />
              <p className="text-lg">+123 456 7890</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-green-500" />
              <p className="text-lg">contact@yourdomain.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl text-red-500" />
              <p className="text-lg">
                123 Your Street, Your City, Your Country
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md space-y-4 md:col-span-2"
          >
            <div>
              <label className="block text-lg font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows="4"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full py-3 text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

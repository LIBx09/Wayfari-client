import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLink } from "react-icons/fa";
import contactBg from "../../assets/contactBg.jpg";

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
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          Have a question or inquiry? Fill out the form below, and we’ll get
          back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaLink className="text-2xl text-blue-600" />
              <a
                href="https://visa-navigator-6e2d7.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-600 hover:underline"
              >
                Visa Navigator
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaLink className="text-2xl text-blue-600" />
              <a
                href="https://timekeeper-s-archive.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-600 hover:underline"
              >
                Timekeeper&apos;s Archive
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaLink className="text-2xl text-blue-600" />
              <a
                href="https://ling-guru.web.app/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-600 hover:underline"
              >
                Ling Guru
              </a>
            </div>

            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center gap-4">
                <FaPhone className="text-2xl text-gray-700 dark:text-gray-300" />
                <p className="text-lg text-gray-800 dark:text-gray-300">
                  +123 456 7890
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-gray-700 dark:text-gray-300" />
                <p className="text-lg text-gray-800 dark:text-gray-300">
                  contact@yourdomain.com
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-2xl text-gray-700 dark:text-gray-300" />
                <p className="text-lg text-gray-800 dark:text-gray-300">
                  123 Your Street, Your City, Your Country
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
          >
            <div>
              <label className="block text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 text-lg font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition"
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

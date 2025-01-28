/* eslint-disable no-unused-vars */

import { FaHeart, FaShareAlt } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FacebookIcon, FacebookShareButton } from "react-share";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useState } from "react";

/* eslint-disable react/prop-types */
const SampleStoryCard = ({ story }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { _id, description, images, title } = story;
  const shareUrl = window.location.href;
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const isCommunity = location.pathname === "/community";

  const handleFavorite = async () => {
    if (!user?.email) {
      navigate("signIn");
    }
    const res = await axiosPublic.post("/stories/favorite", {
      storyId: _id,
      email: user.email,
    });

    if (res.data.modifiedCount > 0) {
      toast.success("Story added to the Favorite");
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="relative group w-full h-64 overflow-hidden rounded-t-lg">
          {/* Image */}
          <img
            className="w-full h-full object-cover"
            src={images[0]}
            alt="Example"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>

          {/* Gradient Sweep Effect */}
          <div className="absolute top-0 left-[-150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform skew-x-[-20deg] pointer-events-none transition-all duration-700 group-hover:left-[150%]"></div>

          {/* Text Overlay */}
          <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/75 to-transparent text-white z-10">
            <div className="flex justify-between items-center">
              <h5 className="text-lg font-bold">{title}</h5>
              <div className="flex gap-2">
                {/* Like Button */}
                <button
                  onClick={handleFavorite}
                  className={`p-2 rounded-full transition ${
                    isFavorite ? "text-red-500" : "hover:text-red-500"
                  }`}
                >
                  <FaHeart size={32} />
                </button>

                {/* Share Button */}
                <FacebookShareButton url={shareUrl} quote={title}>
                  <button className="p-2 rounded-full hover:bg-white/100 hover:text-blue-500 transition">
                    <FacebookIcon size={32} round />
                  </button>
                </FacebookShareButton>
              </div>
            </div>
            <p className="text-sm">{description}</p>
          </div>

          {/* Like and Love Section */}
          <div className="absolute bottom-4 right-5 flex items-center gap-4 z-10 ">
            <Link to="community">
              {!isCommunity && (
                <button className="btn btn-primary mt-3">More</button>
              )}
            </Link>
            <Link to="/dashboard/addStories">
              <button className="p-1 rounded-full hover:bg-white/100 text-white text-xl border hover:text-blue-500 transition">
                <IoIosAdd />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SampleStoryCard;

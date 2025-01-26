import { FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const StoryCard = ({ story, handleDelete }) => {
  return (
    <div className="card bg-base-100 image-full shadow-xl">
      <figure>
        <img src={story.images[0]} alt={story.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{story.title}</h2>
        <p>{story.description}</p>
        <div>
          <div className="card-actions justify-end">
            <div className="-ml-10gap">
              <FaRegThumbsUp className=" text-red-500 " />
            </div>
            <Link
              to={`/dashboard/editStory/${story._id}`}
              className="btn btn-xs text-white bg-[#252930] hover:bg-[#AAA081] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(story._id)}
              className="btn btn-danger btn-xs text-white bg-[#252930] hover:bg-[#AAA081] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;

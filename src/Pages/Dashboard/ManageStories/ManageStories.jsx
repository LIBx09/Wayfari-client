import { toast } from "react-toastify";
import useMyStories from "../../../Hooks/useMyStories";
import StoryCard from "../../../components/ManageStoryCard/StoryCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageStories = () => {
  const [myStories, refetch] = useMyStories();
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (id) => {
    console.log(id);

    const res = await axiosSecure.delete(`/stories/${id}`);
    console.log(res.data);
    if (res.data.deletedCount) {
      toast.success("Story deleted successfully!");
      refetch();
    } else {
      toast.error("Failed to delete the story!");
    }
  };

  const handleImageDelete = async (storyId, imageUrl) => {
    console.log(storyId, imageUrl);
    try {
      const res = await axiosSecure.put(`/stories/remove-image/${storyId}`, {
        imageUrl,
      });
      if (res.data.success) {
        toast.success("Image removed successfully!");
      } else {
        toast.error("Failed to remove the image!");
      }
    } catch (error) {
      toast.error("Error removing image!", error);
    }
  };

  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-2xl font-bold mb-6">Manage Your Stories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {myStories && myStories.length > 0 ? (
          myStories.map((story) => (
            <StoryCard
              key={story._id}
              story={story}
              handleDelete={handleDelete}
              handleImageDelete={handleImageDelete}
            />
          ))
        ) : (
          <p>No stories found.</p>
        )}
      </div>
    </div>
  );
};

export default ManageStories;

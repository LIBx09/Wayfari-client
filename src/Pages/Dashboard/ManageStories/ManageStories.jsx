import { toast } from "react-toastify";
import useMyStories from "../../../Hooks/useMyStories";
import StoryCard from "../../../components/ManageStoryCard/StoryCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import StorySection from "./StorySection";

const ManageStories = () => {
  const [myStories, refetch, isLoading] = useMyStories();
  const axiosSecure = useAxiosSecure();
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this story?"
    );
    if (!confirmDelete) return;

    try {
      setDeletingId(id);
      const res = await axiosSecure.delete(`/stories/${id}`);

      if (res.data.deletedCount) {
        toast.success("✅ Story deleted successfully!");
        refetch();
      } else {
        toast.error("❌ Failed to delete the story!");
      }
    } catch (error) {
      toast.error(`Error: ${error?.response?.data?.message || error.message}`);
    } finally {
      setDeletingId(null);
    }
  };

  const handleImageDelete = async (storyId, imageUrl) => {
    try {
      const res = await axiosSecure.put(`/stories/remove-image/${storyId}`, {
        imageUrl,
      });

      if (res.data.success) {
        toast.success("🖼️ Image removed successfully!");
        refetch(); // refresh the UI
      } else {
        toast.error("❌ Failed to remove the image!");
      }
    } catch (error) {
      toast.error(
        `Image removal error: ${error?.message || "Something went wrong."}`
      );
    }
  };

  return (
    <div className="w-10/12 mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        📝 Manage Your Stories
      </h2>

      {isLoading ? (
        <div className="text-center text-xl">Loading your stories...</div>
      ) : myStories && myStories.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {myStories.map((story) => (
              <StoryCard
                key={story._id}
                story={story}
                handleDelete={handleDelete}
                handleImageDelete={handleImageDelete}
                deleting={deletingId === story._id}
              />
            ))}
          </div>
          <StorySection />
        </>
      ) : (
        <div className="text-center text-gray-600 text-lg">
          You haven&apos;t added any stories yet.
        </div>
      )}
    </div>
  );
};

export default ManageStories;

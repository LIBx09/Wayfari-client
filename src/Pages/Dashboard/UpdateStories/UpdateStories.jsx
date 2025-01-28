import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const image_hosting_key = import.meta.env.VITE_Image_Key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateStories = () => {
  const { id } = useParams();
  const [story, setStory] = useState({});
  const axiosPublic = useAxiosPublic();

  const { register, handleSubmit, reset } = useForm();

  const handleAddImage = async (data) => {
    const files = data.files;
    const uploadedImageUrls = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const res = await axiosPublic.post(image_hosting_api, formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });

        if (res.data && res.data.data && res.data.data.url) {
          uploadedImageUrls.push(res.data.data.url);
          toast.success("Image uploaded successfully!");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Failed to upload image!");
      }
    }

    if (uploadedImageUrls.length > 0) {
      try {
        const res = await axiosPublic.put(`/stories/manage-images/${id}`, {
          addImage: { $each: uploadedImageUrls },
        });
        if (res.data.modifiedCount > 0) {
          setStory((prevStory) => ({
            ...prevStory,
            images: [...prevStory.images, ...uploadedImageUrls],
          }));
          toast.success("Images updated successfully!");
        }
      } catch (error) {
        console.error("Error adding images:", error);
        toast.error("Failed to update images!");
      }
    }

    reset();
  };

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await axiosPublic.get(`/story/${id}`);
        setStory(res.data);
      } catch (error) {
        console.error("Error fetching story:", error);
      }
    };
    fetchStory();
  }, [axiosPublic, id]);

  const handleDeleteImage = async (image) => {
    try {
      const res = await axiosPublic.put(`/stories/manage-images/${id}`, {
        removeImage: image,
      });

      if (res.data.modifiedCount > 0) {
        toast.success("Image Deleted Successfully");
        setStory((prevStory) => ({
          ...prevStory,
          images: prevStory.images.filter((img) => img !== image),
        }));
      }
    } catch (error) {
      toast.error("Error deleting image:", error);
    }
  };

  return (
    <div className="w-10/12 mx-auto">
      <Helmet>
        <title>Update Image || Wayfari</title>
      </Helmet>
      <div className="text-center my-8">
        <SectionTitle
          heading="Update Your Stories Image"
          subHeading="Spread Love Others"
        />
      </div>
      <div className="flex gap-2">
        {story.images?.map((image, idx) => (
          <div key={idx} className="relative">
            <img
              src={image}
              className="w-44 h-28 rounded-lg"
              alt="Story Image"
            />
            <button
              onClick={() => handleDeleteImage(image)}
              className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit(handleAddImage)}>
        <div>
          <label className="block -mb-4 text-sm font-medium text-gray-900 dark:text-white mt-5">
            Upload New Images
          </label>
          <input
            type="file"
            {...register("files")}
            multiple
            className="file-input mt-5 w-full max-w-xs mb-6"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-[#252930] hover:bg-[#AAA081] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateStories;

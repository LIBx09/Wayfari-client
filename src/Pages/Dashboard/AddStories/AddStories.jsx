import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import useAuth from "../../../Hooks/useAuth";
// import { useState } from "react";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

// const image_hosting_key = import.meta.env.VITE_Image_Key;
const CLOUD_NAME = "djl3urrwu";
const image_hosting_api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

const AddStories = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  // const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  // const [uplodedImageUrl, setUplodedImageUrl] = useState([]);

  const onSubmit = async (data) => {
    const files = data.storyImages;
    const uploadedImageUrls = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "image_upload");
      // formData.append("cloud_name", "djl3urrwu");

      try {
        const res = await axiosPublic.post(image_hosting_api, formData);
        console.log(res.data);
        if (res.data && res.data.url) {
          uploadedImageUrls.push(res.data.url);
          toast.success("Image uploaded successfully!");
        }
        console.log(uploadedImageUrls);
      } catch (error) {
        toast.error("Failed to upload image!", error);
      }
    }

    const storyData = {
      title: data.storyTitle,
      description: data.storyDescription,
      images: uploadedImageUrls,
      email: user.email,
    };

    try {
      const res = await axiosPublic.post("/stories", storyData);
      if (res.data.success) {
        toast.success("Story saved to database successfully!");
      }
    } catch (error) {
      toast.error("Failed to save story to database!", error);
    }

    reset();
  };
  return (
    <div className="w-10/12 mx-auto">
      <Helmet>
        <title>Add Stories || Wayfari</title>
      </Helmet>
      <div className="text-center my-8">
        <SectionTitle
          heading="Add Tour Stories"
          subHeading="Spread Love Others"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Story Title
            </label>
            <input
              type="text"
              {...register("storyTitle", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#AAA081] focus:border-[#AAA081] block w-full p-2.5 dark:bg-[#AAA081] dark:border-[#AAA081] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#AAA081] dark:focus:border-[#AAA081]"
              placeholder="Tour Spots Name"
              required
            />
          </div>
          <label className="flex flex-col gap-1">
            <span className="text-sm mt-5 font-medium">Description</span>
            <textarea
              {...register("storyDescription")}
              className="textarea textarea-bordered"
              placeholder="Write a short details"
            ></textarea>
          </label>
          <div>
            <label className="block -mb-4 text-sm font-medium text-gray-900 dark:text-white mt-5">
              Upload Multiple Image File
            </label>
            <input
              type="file"
              multiple
              className="file-input mt-5 w-full max-w-xs mb-6"
              {...register("storyImages", { required: true })}
            />
          </div>
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

export default AddStories;

import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";
import useSingleUsers from "../../../Hooks/useSingleUsers";

const TourGuideApplicationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const axiosSecure = useAxiosSecure();

  const [singleUsers] = useSingleUsers();
  console.log(singleUsers);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const applyInfo = {
      ...data,
      userDetails: singleUsers,
    };

    const res = await axiosSecure.post("/applications", applyInfo);
    // console.log("asdfasdf", res.data);
    if (res.data.insertedId) {
      toast.success("Application submitted successfully");
    }
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-6">
        Apply to Be a Tour Guide
      </h2>
      {isSubmitted ? (
        <div className="text-center text-green-500 text-lg font-semibold">
          🎉 Your application was submitted successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Application Title */}
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">
              Application Title
            </label>
            <input
              type="text"
              {...register("title", {
                required: "Application title is required",
              })}
              placeholder="Enter application title"
              className="input input-bordered w-full"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Motivation */}
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">
              Why do you want to be a Tour Guide?
            </label>
            <textarea
              {...register("motivation", {
                required: "Motivation is required",
                minLength: {
                  value: 15,
                  message: "Please write at least 15 characters",
                },
              })}
              placeholder="Share your motivation"
              className="textarea textarea-bordered w-full"
              rows="4"
            ></textarea>
            {errors.motivation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.motivation.message}
              </p>
            )}
          </div>

          {/* CV Upload */}
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">CV Link</label>
            <input
              type="url"
              {...register("cv", {
                required: "Application title is required",
              })}
              placeholder="Enter your CV link"
              className="input input-bordered w-full"
            />
            {errors.cv && (
              <p className="text-red-500 text-sm mt-1">{errors.cv.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Submit Application
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TourGuideApplicationForm;

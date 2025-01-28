import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const Addpackage = () => {
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const tourPackageData = {
      ...data,
      dayDetail: data.dayDetail
        .split("/")
        .filter((detail) => detail.trim() !== ""),
      spotPhotos: data.spotPhotos
        .split(",")
        .filter((photo) => photo.trim() !== ""),
    };

    const packageDataRes = await axiosSecure.post("/package", tourPackageData);

    if (packageDataRes.data.insertedId) {
      toast.success("data added successfully");
    }
    reset();
  };

  return (
    <div className="w-10/12 mx-auto">
      <Helmet>
        <title>Add Package || Wayfari</title>
      </Helmet>
      <div className="text-center my-8">
        <SectionTitle
          heading="Add Tour Package"
          subHeading="Spread Love Others"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-10 py-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tour Spots Name
            </label>
            <input
              type="text"
              {...register("tourPlaceName", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#AAA081] focus:border-[#AAA081] block w-full p-2.5 dark:bg-[#AAA081] dark:border-[#AAA081] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#AAA081] dark:focus:border-[#AAA081]"
              placeholder="Tour Spots Name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Trip Title
            </label>
            <input
              type="text"
              {...register("tripTitle", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#AAA081] focus:border-[#AAA081] block w-full p-2.5 dark:bg-[#AAA081] dark:border-[#AAA081] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#AAA081] dark:focus:border-[#AAA081]"
              placeholder="Trip Title"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tour Type
            </label>

            <select
              {...register("tourTypes", { required: true })}
              name="artifactType"
              //   value={artifactType}
              //   onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option value="" disabled>
                Choose Tour Type
              </option>
              <option value="Adventure">Adventure</option>
              <option value="Relaxation">Relaxation</option>
              <option value="Nature">Nature</option>
              <option value="Cultural">Cultural</option>
              <option value="Comprehensive">Comprehensive</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 py-2">
          <div className=" flex-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tourist Spots Image URLs
            </label>
            <input
              type="url"
              {...register("spotPhotos", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#AAA081] focus:border-[#AAA081] block w-full p-2.5 dark:bg-[#AAA081] dark:border-[#AAA081] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#AAA081] dark:focus:border-[#AAA081]"
              placeholder="Stops Image"
              required
            />
          </div>
          <div className=" flex-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Package Price
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#AAA081] focus:border-[#AAA081] block w-full p-2.5 dark:bg-[#AAA081] dark:border-[#AAA081] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#AAA081] dark:focus:border-[#AAA081]"
              placeholder="Set Package Rate/Price"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 py-2">
          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tour Description
            </label>
            <input
              type="text"
              {...register("description", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#AAA081] focus:border-[#AAA081] block w-full p-2.5 dark:bg-[#AAA081] dark:border-[#AAA081] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#AAA081] dark:focus:border-[#AAA081]"
              placeholder="Tour Description"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Day Detail
            </label>
            <input
              type="text"
              {...register("dayDetail", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#AAA081] focus:border-[#AAA081] block w-full p-2.5 dark:bg-[#AAA081] dark:border-[#AAA081] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#AAA081] dark:focus:border-[#AAA081]"
              placeholder="Day Details"
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

export default Addpackage;

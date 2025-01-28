import { useForm } from "react-hook-form";
import useSingleUsers from "../../Hooks/useSingleUsers";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const ManageModal = () => {
  const [singleUsers] = useSingleUsers();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const res = await axiosSecure.put(`/users/update/${singleUsers._id}`, data);

    if (res.data.modifiedCount > 0) {
      toast.success("user updated successfully");
    }

    const modal = document.getElementById("my_modal_4");
    modal.close();
  };

  const handleCancel = () => {
    reset();
    const modal = document.getElementById("my_modal_4");
    modal.close();
  };

  return (
    <>
      <dialog id="my_modal_4" className="modal">
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="dialog"
          className="modal-box"
        >
          <h3 className="text-lg font-bold mb-4">Edit Profile</h3>
          <div className="flex flex-col gap-4">
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Name</span>
              <input
                type="text"
                defaultValue={singleUsers.name}
                {...register("name", { required: "Name is required" })}
                className="input input-bordered"
                placeholder="Enter your name"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Photo URL</span>
              <input
                type="text"
                defaultValue={singleUsers.photo}
                {...register("photo")}
                className="input input-bordered"
                placeholder="Enter photo URL"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Phone</span>
              <input
                type="text"
                defaultValue={singleUsers.phone}
                {...register("phone")}
                className="input input-bordered"
                placeholder="Enter phone number"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Address</span>
              <input
                type="text"
                defaultValue={singleUsers.address}
                {...register("address")}
                className="input input-bordered"
                placeholder="Enter your address"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Bio</span>
              <textarea
                {...register("bio")}
                defaultValue={singleUsers.bio}
                className="textarea textarea-bordered"
                placeholder="Write a short bio"
              ></textarea>
            </label>
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn-error btn-sm"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-success btn-sm">
              Save Changes
            </button>
          </div>
        </form>

        {/* Close on Background Click */}
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
};

export default ManageModal;

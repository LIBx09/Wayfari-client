import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import Select from "react-select";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate"; // Import the pagination component

const options = [
  { value: "all", label: "All" },
  { value: "tourist", label: "Tourist" },
  { value: "guide", label: "Guide" },
  { value: "admin", label: "Admin" },
];

const AllUsers = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const axiosSecure = useAxiosSecure();
  const [displaySearch, setDisplaySearch] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    if (search.trim()) {
      axiosSecure.get(`/user-search?searchUserName=${search}`).then((res) => {
        setDisplaySearch(res.data);
      });
    }
  }, [axiosSecure, search]);

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const filteredUsers = users.filter((user) => {
    const matchesRole =
      !selectedOption ||
      selectedOption.value === "all" ||
      selectedOption.value === user.role;
    return matchesRole;
  });

  const usersToDisplay = search.trim() ? displaySearch : filteredUsers;

  const indexOfLastUser = (currentPage + 1) * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersToDisplay.slice(indexOfFirstUser, indexOfLastUser);

  // Handle page change
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      <Helmet>
        <title>All Users || Wayfari</title>
      </Helmet>
      <SectionTitle
        heading="You can and manage all the users or search"
        subHeading="All Users"
      />
      <div className="flex justify-between items-center my-5">
        <div>
          <label className="input input-bordered flex items-center gap-2 py-4">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="grow"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div>
          <Select
            defaultValue={selectedOption}
            onChange={(selected) => setSelectedOption(selected)}
            options={options}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-orange-300">
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, idx) => (
              <tr key={user._id}>
                <th>{indexOfFirstUser + idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.photo} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="my-4">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={Math.ceil(usersToDisplay.length / usersPerPage)} // Calculate the total page count
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName="flex items-center justify-center space-x-2"
          pageClassName="flex" // Wrapper for each page
          pageLinkClassName="px-3 py-1 border rounded-lg text-blue-600 border-blue-400 hover:bg-blue-500 hover:text-white transition" // Page links
          activeClassName="bg-blue-600 text-white border-blue-600" // Active page
          previousClassName="flex" // Previous button wrapper
          previousLinkClassName="px-3 py-1 border rounded-lg text-blue-600 border-blue-400 hover:bg-blue-500 hover:text-white transition" // Previous button link
          nextClassName="flex" // Next button wrapper
          nextLinkClassName="px-3 py-1 border rounded-lg text-blue-600 border-blue-400 hover:bg-blue-500 hover:text-white transition" // Next button link
          breakClassName="flex" // Wrapper for ellipsis
          breakLinkClassName="px-3 py-1 text-blue-600" // Ellipsis styling
          disabledClassName="opacity-50 cursor-not-allowed" // Disabled buttons
        />
      </div>
    </>
  );
};

export default AllUsers;

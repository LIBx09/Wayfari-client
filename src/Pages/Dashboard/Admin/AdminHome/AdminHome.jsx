import { Helmet } from "react-helmet-async";
import ManageProfile from "../../ManageProfile/ManageProfile";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Chart from "../../../../components/Chart/Chart";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: adminStatData = [] } = useQuery({
    queryKey: ["adminStatData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");

      return res.data;
    },
  });
  console.log(adminStatData);
  return (
    <div className=" mx-auto">
      <Helmet>
        <title>Admin Home || Wayfari</title>
      </Helmet>
      <SectionTitle heading="ADMIN HOME" />
      <div className="stats shadow flex flex-wrap justify-center gap-4">
        <div className="stat flex-1 min-w-[250px]">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Package</div>
          <div className="stat-value">{adminStatData?.package}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat flex-1 min-w-[250px]">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Users</div>
          <div className="stat-value">
            Tourist: {adminStatData?.stats?.tourist}
          </div>
          <div className="font-bold">Guide: {adminStatData?.stats?.guide}</div>
        </div>

        <div className="stat flex-1 min-w-[250px]">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Revenue</div>
          <div className="stat-value">{adminStatData?.totalRevenue}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat flex-1 min-w-[250px]">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Stories</div>
          <div className="stat-value">{adminStatData.stories}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      <Chart adminStatData={adminStatData} />
      <ManageProfile />
    </div>
  );
};

export default AdminHome;

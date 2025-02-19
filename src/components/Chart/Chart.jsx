/* eslint-disable react/prop-types */
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Loading from "../Loading/Loading";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const Chart = ({ adminStatData }) => {
  if (!adminStatData) return <Loading />; // Handle missing data

  // Transforming `adminStatData` into an array for Recharts
  const data = [
    { name: "Packages", value: adminStatData?.package },
    { name: "Stories", value: adminStatData?.stories },
    { name: "Tourists", value: adminStatData?.stats?.tourist },
    { name: "Guides", value: adminStatData?.stats?.guide },
    { name: "Revenue", value: adminStatData?.totalRevenue },
  ];

  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" label={{ position: "top" }}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

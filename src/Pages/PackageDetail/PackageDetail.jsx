import { useLoaderData } from "react-router-dom";

const PackageDetail = () => {
  const detailPackage = useLoaderData();
  console.log(detailPackage);
  return (
    <div>
      <h2>details page</h2>
    </div>
  );
};

export default PackageDetail;

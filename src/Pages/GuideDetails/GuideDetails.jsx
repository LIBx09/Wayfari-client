import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const GuideDetails = () => {
  const { id, guideId } = useParams();
  const [guideData, setGuideData] = useState(null);

  useEffect(() => {
    // Determine the fetch URL based on the presence of 'id'
    const url = id
      ? `http://localhost:5000/users/all/guide/${guideId}?detailsId=${id}`
      : `http://localhost:5000/users/all/guide/${guideId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setGuideData(data))
      .catch((error) => console.error(error));
  }, [id, guideId]);

  return (
    <div>
      {guideData ? (
        <div>
          <h1>Guide Details</h1>
          <p>{JSON.stringify(guideData)}</p>
          {id && <p>Details ID: {id}</p>}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GuideDetails;

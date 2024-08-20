// import React from "react";

// function Details() {
//     return (
//         <>
//             <h1>Details Page</h1>
//         </>
//     );
// }

// export default Details;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../api/config";
import Detail_compo from "../detail_compo.jsx/detail_compo";
import React from "react";

function Details() {
  const [movie, setmovie] = useState(null);
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  const [Recommend, setRecommend] = useState([]);
  const { id } = useParams();
  const apiKey = "297621b4d5ff1780c9e821b4a756aaac";

  useEffect(() => {
    Api.get(`/movie/${id}?api_key=${apiKey}`)
      .then((response) => {
        console.log("data of new detail", response.data);
        setmovie(response.data);
      })
      .catch(() => {
        setError(true);
      });
  }, [id]);
  useEffect(() => {
    Api.get(`/movie/${id}/recommendations?api_key=${apiKey}`)
      .then((resp) => {
        console.log("Recommend detail", resp.data.results);
        setRecommend(resp.data.results);
      })
      .catch(() => {
        // console.error2("Error fetching recommendations:", error);
        setError2(true);
      });
  }, [id]);

  console.log("Recommend state:", Recommend);
  return (
    <>
      <React.Fragment>
        {movie && <Detail_compo movie={movie} Recommend={Recommend} />}
      </React.Fragment>
    </>
  );
}

export default Details;

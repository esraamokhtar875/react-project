import { Button, Col, Row } from "react-bootstrap";
import "./detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Detail_compo({ movie, Recommend = [] }) {
  const {
    title,
    release_date,
    original_language,
    overview,
    poster_path,
    homepage,
    vote_average,
    vote_count,
    runtime,
    genres,
  } = movie;

  const stars = Array(5)
    .fill(false)
    .map((_, index) => index < vote_average);
  const fullStars = Math.floor(vote_average);
  const hasHalfStar = vote_average % 1 >= 0.5;
  const totalStars = 5;

  return (
    <>
      <Row style={{ display: "flex" }}>
        <div>
          <img
            style={{
              margin: "20px",
              width: "412px",
              height: "618px",
              borderRadius: "27PX",
              boxShadow: "1px 1px 1px black",
            }}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <p style={{ marginBottom: "20px" }}>
            <h1 style={{ width: "485px", height: "78", marginTop: "50px" }}>
              {title}
            </h1>
            <p style={{ color: "gray" }}>{release_date} </p>
          </p>
          <div className="star-rating" style={{ marginBottom: "20px" }}>
            {Array.from({ length: totalStars }, (_, index) => {
              if (index < fullStars) {
                return (
                  <span key={index} className="star filled">
                    ★
                  </span>
                );
              } else if (index === fullStars && hasHalfStar) {
                return (
                  <span key={index} className="star half-filled">
                    ★
                  </span>
                );
              } else {
                return (
                  <span key={index} className="star">
                    ★
                  </span>
                );
              }
            })}
          </div>
          {vote_count}

          <p style={{ width: "838px", height: "145px", fontSize: "24px" }}>
            {overview}
          </p>

          <div style={{ display: "flex", marginBottom: "20px" }}>
            {genres.map((genre) => (
              <button
                key={genre.id}
                style={{
                  marginRight: "20px",

                  fontSize: "16px",
                  width: "112px",
                  height: "37px",
                  borderRadius: "20px",
                  backgroundColor: "#FFE353",
                  border: "1px solid #FFE353",
                }}
              >
                {genre.name}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: "100px", marginBottom: "30px" }}>
            <p>
              <strong style={{ marginRight: "10px" }}>Duration:</strong>
              {runtime} Min{" "}
            </p>
            <p>
              <strong style={{ marginRight: "10px" }}>Language:</strong>{" "}
              {original_language}
            </p>
          </div>
          <p></p>
          <button
            target="_blank"
            style={{
              border: "1px solid #FFE353",
              padding: "12px",
              borderRadius: "20PX",
              backgroundColor: "white",
            }}
          >
            <a href={homepage}>Website</a>
            <FontAwesomeIcon
              icon={faLink}
              style={{ marginLeft: "8px", fontSize: "15px" }}
            />
          </button>
        </div>
      </Row>
      <div style={{ margin: "40px", color: "lightgray" }}>
        ____________________________________________________________________________________________________________________________________________________________________________________________________________________________
      </div>
      <h1 style={{ marginLeft: "20px" }}>Recommendiations</h1>
      <div style={{ width: "1371", height: "441" }}>
        <Row style={{ display: "flex", flexWrap: "wrap" }}>
          {Recommend && Recommend.length > 0 ? (
            Recommend.map((rec) => (
              <Col key={rec.id} xs={6} md={4} lg={3}>
                <div className="recommendation-item">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${rec.poster_path}`}
                    alt={rec.title}
                    style={{
                      width: "200px",
                      marginLeft: "20px",
                      height: "300px",
                      borderRadius: "15PX",
                    }}
                  />
                  <h2 style={{ marginLeft: "20px", width: "200px" }}>
                    {rec.title}
                  </h2>
                  <p style={{ marginLeft: " 20px", color: "gray" }}>
                    {rec.release_date}
                  </p>
                </div>
              </Col>
            ))
          ) : (
            <p>No recommendations available.</p>
          )}
        </Row>
      </div>
    </>
  );
}

export default Detail_compo;

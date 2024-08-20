import { Button, Col, Row } from "react-bootstrap";
import "./detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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

  const fullStars = Math.floor(vote_average / 2);
  const hasHalfStar = (vote_average / 2) % 1 >= 0.5;
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
          <div className="">
            {Array.from({ length: totalStars }, (_, index) => {
              if (index < fullStars) {
                return (
                  <FontAwesomeIcon
                    style={{ color: "black", fontSize: "25px" }}
                    key={index}
                    icon={faStar}
                    className="star filled"
                  />
                );
              } else if (index === fullStars && hasHalfStar) {
                return (
                  <FontAwesomeIcon
                    style={{ color: "black", fontSize: "25px" }}
                    key={index}
                    icon={faStarHalfAlt}
                    className="star half-filled"
                  />
                );
              } else {
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStarRegular}
                    className="star empty"
                    style={{ opacity: 0.5, fontSize: "30px" }}
                  />
                );
              }
            })}
            <span style={{ fontSize: "25px", color: "gray", margin: "20px" }}>
              {vote_count}
            </span>
          </div>

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
              <Col key={rec.id}>
                <div
                  className="movie-card"
                  style={{
                    width: "200px",
                    marginLeft: "20px",
                    height: "400px",
                    marginBottom: "20px",
                  }}
                >
                  <Link to={`/details/${rec.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${rec.poster_path}`}
                      alt={rec.title}
                      className="movie-poster"
                    />
                  </Link>
                  <h3>{rec.title}</h3>

                  <p>{rec.release_date}</p>
                  <p className="ico">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                    </svg>
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

import React, { useEffect, useState } from "react";
import MovieDetails from "./MovieDetails";

export const Movies = () => {
  const [values, setValues] = useState([]);
  const [movieName, setMovieName] = useState("");
  useEffect(() => {
    const criteria = {
      method: "GET",
      headers: {
        Authorization: "Bearer Wookie2019",
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    };
    fetch("https://wookie.codesubmit.io/movies", criteria)
      .then((req) => req.json())
      .then((res) => setValues(res.movies));
  }, []);
  console.log(values);

  return (
    <>
      <div>
        {movieName === "" ? (
          <div>
            <div className="block">
              {values.map((movies, id) => {
                return (
                  <div className="block-item" key={id}>
                    <div>
                      <img
                        className="movie-poster"
                        src={movies.poster}
                        alt="Rome"
                      />
                      <div className="movie-content">
                        <h1 className="blockHeader">{movies.title}</h1>
                        <div className="movie-card">
                          <h3>Director:{movies.director}</h3>
                          <h3>Duration:{movies.length}</h3>
                        </div>

                        <p className="movie-text">{movies.overview}</p>
                        <button
                          className="click-btn"
                          onClick={() => setMovieName(movies.id)}
                        >
                          Visit <span>&rarr;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="movie-details">
            <MovieDetails values={values} movieName={movieName} />
          </div>
        )}
      </div>
    </>
  );
};

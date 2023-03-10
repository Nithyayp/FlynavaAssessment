import React from "react";
const MovieDetails = (props) => {
  return (
    <div>
      <h1>Movie Details</h1>
      <div>
        <div>
          {props.values.map((movies) => {
            if (movies.id === props.movieName) {
              return (
                <>
                  <div className="movie-details">
                    <img src={movies.poster} alt="" />
                    <div className="block-cardClick">
                      <p>Title:{movies.title}</p>
                      <p>
                        cast:
                        {movies.cast.map((casts) => {
                          return <p>{casts}</p>;
                        })}
                      </p>
                      <p className="para">Movie Overview:{movies.overview}</p>
                      <p>classifications:{movies.classification}</p>
                      <p>imdb_rating :{movies.imdb_rating}</p>
                      <p>Duration:{movies.length}</p>
                      <p>released_on :{movies.released_on}</p>
                      <p>slug :{movies.slug}</p>
                      <p>
                        genres:{" "}
                        {movies.genres.map((gene, i) => {
                          return (
                            <p>
                              <ol>
                                {i}:{gene}
                              </ol>
                            </p>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

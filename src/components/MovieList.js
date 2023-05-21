import React from "react";
import Movie from "./Movie";

const MovieList = ({ results }) => {
  return (
    <div>
      {results?.length > 0 &&
        results.map((movie) => (
          <Movie key={movie.id} title={movie.title} overview={movie.overview} />
        ))}
    </div>
  );
};

export default MovieList;

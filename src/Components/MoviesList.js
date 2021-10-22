import React from "react";
import MovieCard from "./MovieCard";

function MoviesList({ movies }) {
  return (
    <div className="card-list">
      {movies
        .filter((movies) => movies.poster_path)
        .sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
}

export default MoviesList;

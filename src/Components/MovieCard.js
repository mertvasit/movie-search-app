import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { id, title, poster_path } = movie;
  return (
    <div className="card bg-dark">
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
        alt={movie.title + " poster"}
      />
      <div className="card-body">
        <div className="card--info">
          <Link
            to={`/${title}/${id}`}
            className="btn btn-outline-light form-control"
          >
            Read
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

import React, { useState } from "react";
import MoviesList from "./MoviesList";
import Spinner from "./Loading";

function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const searchMoviesFunction = async (e) => {
    setLoading(true);
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=fa5e96a294d28d18b8825cb6ad12d9f9&language=en-US&query=${query}&include_adult=false`;
    console.log(url);

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <>
      <form className="form" onSubmit={searchMoviesFunction}>
        <label className="label" htmlFor="query">
          <span className="badge badge-primary">Movie Name</span>
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="button"
          onClick={() => setLoading(true)}
        >
          Search
        </button>
      </form>
      {isLoading ? <Spinner /> : <MoviesList movies={movies} />}
    </>
  );
}

export default SearchMovies;

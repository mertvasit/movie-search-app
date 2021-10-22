import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";

class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      selectedId: this.props.match.params.num,
      isLoading: false,
      error: null,
      movies: [],
      clickedMovie: [],
    };
  }

  componentDidMount() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=fa5e96a294d28d18b8825cb6ad12d9f9&language=en-US&query=${this.state.slug}&include_adult=false`;

    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        this.setState(
          {
            movies: res.results,
            isLoading: true,
          },
          (error) => {
            this.setState({
              isLoading: true,
              error,
            });
          }
        );
      });
  }

  render() {
    let { movies, selectedId, error, isLoading } = this.state;
    let filteredMovies =
      movies[0] !== null
        ? movies.filter((movie) => {
            return movie.id === Number(selectedId);
          })
        : null;

    if (error) {
      return <div>error:{error}</div>;
    } else if (!isLoading) return <Loading />;
    else {
    }
    return (
      <>
        {filteredMovies.map((movie, index) => {
          return (
            <div key={index}>
              <div className="container">
                <div className="jumbotron hoverable p-4">
                  <div className="row">
                    <div className="col-md-3 text-center">
                      <img
                        className="rounded"
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        width="250px"
                        height="400px"
                      />
                    </div>
                    <div className="col-md-9">
                      <div>
                        <h2>
                          {movie.title}{" "}
                          <span className="badge badge-primary">
                            {movie.vote_average} / 10
                          </span>
                        </h2>
                      </div>
                      <h5>
                        <label>Release Date:</label>
                        {movie.release_date}
                      </h5>
                      <div className="overview">
                        <p>{movie.overview}</p>
                      </div>
                      <div className="social">
                        <ul>
                          <li>
                            <svg
                              className="bi bi-link-45deg"
                              width="1.5em"
                              height="1.5em"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                              <path d="M5.712 6.96l.167-.167a1.99 1.99 0 0 1 .896-.518 1.99 1.99 0 0 1 .518-.896l.167-.167A3.004 3.004 0 0 0 6 5.499c-.22.46-.316.963-.288 1.46z" />
                              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
                              <path d="M10 9.5a2.99 2.99 0 0 0 .288-1.46l-.167.167a1.99 1.99 0 0 1-.896.518 1.99 1.99 0 0 1-.518.896l-.167.167A3.004 3.004 0 0 0 10 9.501z" />
                            </svg>{" "}
                          </li>
                          <li>
                            <svg
                              className="bi bi-heart"
                              width="1.5em"
                              height="1.5em"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                              />
                            </svg>{" "}
                          </li>
                          <li>
                            <svg
                              className="bi bi-chat-dots"
                              width="1.5em"
                              height="1.5em"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                              />
                              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>{" "}
                          </li>
                        </ul>
                      </div>
                      <Link
                        to="/"
                        className="btn btn-outline-danger form-control"
                        style={{ marginBottom: 0 }}
                      >
                        <span>
                          <svg
                            className="bi bi-arrow-left-circle"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
                            />
                          </svg>
                          Back
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default SingleMovie;

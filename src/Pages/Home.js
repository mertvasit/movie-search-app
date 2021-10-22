import React, { Component, useState } from "react";
// import { Link } from "react-router-dom";
import SearchMovies from "../Components/SearchMovies";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        {/* <img className="logo" src={MovieClub} alt="logo" /> */}
        <SearchMovies status={this.state} />
      </div>
    );
  }
}

export default Home;

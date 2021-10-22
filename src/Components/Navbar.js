import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";

function Navbar() {
  return (
    <div>
      <header tabIndex="0">
        <div className="siteLogo" style={{ display: "inline-block" }}>
          <Link to="/" className="link text-primary">
            {" "}
            <img src={Logo} width="65vw" height="65vw" />
          </Link>
        </div>{" "}
        <div id="nav-container" style={{ display: "inline-block" }}>
          <div className="my-button" tabIndex="0">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </div>
          <div id="nav-content" tabIndex="0">
            <ul>
              <li>
                <Link to="/" className="link text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="link text-primary">
                  Search
                </Link>
              </li>
              <li>
                <Link to="/" className="link text-primary">
                  Contact Us
                </Link>
              </li>
              <li className="small">
                <Link to="/" className="link text-primary">
                  Facebook
                </Link>{" "}
                <Link to="/" className="link text-primary">
                  Instagram
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

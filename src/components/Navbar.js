import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* Brand */}
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar as and Search */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-a active" aria-current="page" to="/" mx-4> Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-a" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>

            {/* Search Form */}
            <form className="d-flex me-4">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success me-3" type="submit">
                Search
              </button>
              <div style={{ marginRight: "20px" }}></div>
            </form>

            {/* Dark Mode Toggle */}
            <div className="form-check form-switch text-light">
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
              />
              <label className="form-check-label" htmlFor="switchCheckDefault">
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "about",
};

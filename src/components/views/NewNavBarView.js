import React from "react";
import { Link } from "react-router-dom";

const NewNavBarView =(props)=> {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-info">
        <a className="navbar-brand" href="#">
          APP_NAME or APP_LOGO
        </a>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
            </li>
          </ul>
          <form className="form-inline mt-2 mt-md-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button
              className="btn btn-outline-light my-2 my-sm-0 bg-primary"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
}

export default NewNavBarView;

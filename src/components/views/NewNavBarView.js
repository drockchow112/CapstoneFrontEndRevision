import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewNavBarView extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-info">
        <a class="navbar-brand" href="#">
          Price Comparison
        </a>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
            </li>
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button
              class="btn btn-outline-light my-2 my-sm-0 bg-primary"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default NewNavBarView;

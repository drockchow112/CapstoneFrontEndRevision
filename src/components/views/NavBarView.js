import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBarView =(props)=> {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-info">
        <a className="navbar-brand" href="#">
          CHEAPEST PRICE!
        </a>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/items" className="nav-link">
                Product
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
            <li className="nav-item">
              <Link to="/checkout" className="nav-link">
                Checkout
              </Link>
            </li>
          </ul>
          <form className="form-inline mt-2 mt-md-0" 
            onSubmit={props.handleSubmit}>
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              onChange={props.handleChange}
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

NavBarView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default NavBarView;
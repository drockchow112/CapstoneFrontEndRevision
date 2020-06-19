import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBarView =(props)=> {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-info">
        <Link to="/home" className="navbar-brand">
          CHEAPEST PRICE!</Link>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/items" className="nav-link">
                items
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Products
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
          <form className="form-inline mt-2 mt-md-0" onSubmit={props.handleSubmit}>
            <input
              value={props.search}
              name="search"
              onChange={props.handleChange}
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
NavBarView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
export default NavBarView;

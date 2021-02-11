import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/NavBarView.css";

const NavBarView = (props) => {
  let LoginDisplay;
  if (props.user.id) {
    LoginDisplay = (
      <li className="nav-item">
        <Link to={`/users/${props.user.id}`} className="nav-link">
          Hi,{props.user.userName}
        </Link>
      </li>
    );
  }

  return (
    <nav className="header">
      <Link to="/home" className="navbar-brand">
        CHEAPEST PRICE!
      </Link>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>

          {LoginDisplay}
        </ul>
        <form
          className="form-inline mt-2 mt-md-0"
          onSubmit={props.handleSubmit}
        >
          <input
            value={props.search}
            name="search"
            onChange={props.handleChange}
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          ></input>
        </form>
      </div>
    </nav>
  );
};
NavBarView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
export default NavBarView;

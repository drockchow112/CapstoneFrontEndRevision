import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/NavBarView.css";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

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
    <>
      <nav className="header">
        <h2>Not Amazon</h2>
        <div className="search">
          <input type="search" placeholder="Search" />
          <IconContext.Provider value={{ marginRight: "20px", color: "blue" }}>
            <FaSearch />
          </IconContext.Provider>
        </div>
        <button>Log In</button>
      </nav>
    </>
  );
};

NavBarView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
export default NavBarView;

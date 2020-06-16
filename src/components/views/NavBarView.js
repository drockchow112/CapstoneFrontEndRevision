import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  return (
    <>
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link to="/signup" className="nav-link">signup</Link>
      </li>
      <li className="nav-item">
        <Link to="/users" className="nav-link">Users</Link>
      </li>
      <li className="nav-item">
        <Link to="/students" className="nav-link">Students</Link>
      </li>
    </ul>
    </>
  );
};

export default NavBarView;

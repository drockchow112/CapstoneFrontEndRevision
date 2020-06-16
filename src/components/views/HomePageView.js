import React, { Component } from "react";

import { Link } from "react-router-dom";
//basic Home page
class HomePageView extends Component {
  render() {
    return (
      <div>
        <img src="https://via.placeholder.com/150" alt="app logo"></img>
        <h1>Home Page is Blank</h1>

        <Link to="/signup">Sign Up Page</Link>
      </div>
    );
  }
}

export default HomePageView;

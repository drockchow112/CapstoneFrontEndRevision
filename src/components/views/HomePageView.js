import React from "react";

import { Link } from "react-router-dom";
//basic Home page
const HomePageView =()=> {

    return (
      <div>
        <img src="https://via.placeholder.com/150" alt="app logo"></img>
        <h1>Home Page is Blank</h1>

        <Link to="/signup">Sign Up Page</Link>
      </div>
    );
}

export default HomePageView;

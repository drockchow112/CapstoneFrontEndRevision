import React from "react";

import { Link } from "react-router-dom";
//basic Home page
const HomePageView =()=> {

    return (
      <div>
        <img src="https://i.imgur.com/NhmdH6X.png" alt="app logo" className="logo"></img>
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
  <h1 class="display-4">Cheapest Price!</h1>
  <p class="lead">
    Cheapest Price! is a 3rd party application that fetches items from across different stores and show you the stores with the cheapest price!
    Try searching for an item and see for yourself!
  </p>
</div>
<br></br>
        <Link to="/signup">Sign Up to add items to your favorite!</Link>
      </div>
    );
}

export default HomePageView;

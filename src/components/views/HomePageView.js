import React from "react";

import { Link } from "react-router-dom";
//basic Home page
const HomePageView =(props)=> {
  let userDisplay;
  if(props.user.id){
    userDisplay=<h2>Welcome {props.user.userName}</h2>
  }else{
    userDisplay=<Link to="/signup">Sign Up to add items to your favorite!</Link>;
  }
    return (
      <div>
        <img src="https://i.imgur.com/NhmdH6X.png" alt="app logo" className="logo"></img>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
  <h1 className="display-4">Cheapest Price!</h1>
  <p className="lead">
    Cheapest Price! is a 3rd party application that fetches items from across different stores and show you the stores with the cheapest price!
    Try searching for an item and see for yourself!
  </p>
</div>
<br></br>
          {userDisplay}
      </div>
    );
}

export default HomePageView;

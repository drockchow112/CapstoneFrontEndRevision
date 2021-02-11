import React from "react";

import { Link } from "react-router-dom";
//basic Home page
const HomePageView = (props) => {
  let userDisplay;
  if (props.user.id) {
    userDisplay = <h2>Welcome {props.user.userName}</h2>;
  } else {
    userDisplay = (
      <Link to="/signup">Sign Up to add items to your favorite!</Link>
    );
  }
  return (
    <div>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <p className="lead"></p>
      </div>
      <br></br>
      {userDisplay}
    </div>
  );
};

export default HomePageView;

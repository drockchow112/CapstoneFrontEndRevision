import React, { Component } from "react";

import { HomePageView } from "../views";

class HomePageContainer extends Component {


  
  //json fetch example
  /*
    products[].category
    products[].description
    products[].images[0]//take first element for image every time 
    products[].product_name
    products[].stores[0].store_price//store price can be null or set a fake price(if null fake price)
    
  */


  render() {
    //implement tags associated with picture 
    //array of 5 items per page 
    //take
    return <HomePageView />;
  }
}

export default HomePageContainer;

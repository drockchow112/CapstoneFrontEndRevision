import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,
  SignupFormContainer,
   AllUsersContainer,
   UserContainer,
   CheckoutCartContainer,
   AllItemsContainer,
   AllProductsContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/home" component={HomePageContainer} />
      <Route exact path="/users" component={AllUsersContainer}/>
      <Route exact path="/users/:id" component={UserContainer}/>
      <Route exact path="/checkout" component={CheckoutCartContainer}/>
      <Route exact path="/items" component={AllItemsContainer}/>
      <Route exact path="/products" component={AllProductsContainer}/>
    </Switch>
  );
};

export default RoutesView;

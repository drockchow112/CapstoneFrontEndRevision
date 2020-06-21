import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,
  SignupFormContainer,
   UserContainer,
   CheckoutCartContainer,
   FavoriteContainer,
   AllProductsContainer,
   ProductContainer,
   SearchProductsContainer,
   LoginFormContainer,
   EditUserFormContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/home" component={HomePageContainer} />
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/users/:id" component={UserContainer}/>
      <Route exact path="/checkout" component={CheckoutCartContainer}/>
      <Route exact path="/favorite" component={FavoriteContainer}/>
      <Route exact path="/products" component={AllProductsContainer}/>
      <Route exact path="/products/:id" component={ProductContainer}/>
      <Route exact path="/products/s/search" component={SearchProductsContainer}/>
      <Route exact path="/users/:id/edit" component={EditUserFormContainer}/>
    </Switch>
  );
};

export default RoutesView;

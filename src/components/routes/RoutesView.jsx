import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,
  SignupFormContainer,
  AllUsersContainer
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/users" component={AllUsersContainer} />
      <Route exact path="/home" component={HomePageContainer} />
    </Switch>
  );
};

export default RoutesView;

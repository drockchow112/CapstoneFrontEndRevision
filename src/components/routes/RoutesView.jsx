import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  
  SignupFormContainer,
   AllUsersContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/users" component={AllUsersContainer}/>
    </Switch>
  );
};

export default RoutesView;

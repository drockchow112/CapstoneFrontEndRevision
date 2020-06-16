import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  
  SignupFormContainer,
   AllUsersContainer,
   UserContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/users" component={AllUsersContainer}/>
      <Route exact path="/users/:id" component={UserContainer}/>
    </Switch>
  );
};

export default RoutesView;

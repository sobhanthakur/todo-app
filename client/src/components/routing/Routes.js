import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../components/auth/Login";
import AlertComponent from "../layout/AlertComponent";

const Routes = (props) => {
  return (
    <div className="container">
      <AlertComponent></AlertComponent>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
};

export default Routes;

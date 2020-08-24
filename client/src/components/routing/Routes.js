import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../components/auth/Login";
import AlertComponent from "../layout/AlertComponent";
import PrivateRoute from "./PrivateRoute";
import Landing from "../dashboard/Landing";

const Routes = (props) => {
  return (
    <div className="container">
      <AlertComponent></AlertComponent>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Landing}></PrivateRoute>
      </Switch>
    </div>
  );
};

export default Routes;

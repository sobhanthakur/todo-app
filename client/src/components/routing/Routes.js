import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../components/auth/Login";
import AlertComponent from "../layout/AlertComponent";
import PrivateRoute from "./PrivateRoute";
import Landing from "../dashboard/Landing";
import NavbarComponent from "../layout/NavbarComponent";
import { useSelector } from "react-redux";
import PriorityAssignment from "../dashboard/PriorityAssignment";

const Routes = (props) => {
  const state = useSelector((state) => ({
    auth: state.authReducer.isAuthenticated,
  }));
  return (
    <div className="container">
      <AlertComponent></AlertComponent>
      {state.auth && <NavbarComponent></NavbarComponent>}
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute
          exact
          path="/dashboard"
          component={Landing}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/priority"
          component={PriorityAssignment}
        ></PrivateRoute>
      </Switch>
    </div>
  );
};

export default Routes;

import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../components/auth/Login";

const Routes = (props) => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </section>
  );
};

export default Routes;

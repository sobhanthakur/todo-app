import React from "react";
import Routes from "./components/routing/Routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Switch>
            <Route component={Routes}></Route>
          </Switch>
        </>
      </Router>
    </Provider>
  );
}

export default App;

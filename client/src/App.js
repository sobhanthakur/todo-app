import React from 'react';
import Routes from "./components/routing/Routes";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
        <>
          <Switch>
            <Route component={Routes}></Route>
          </Switch>
        </>
      </Router>
  );
}

export default App;

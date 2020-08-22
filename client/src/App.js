import React,{useEffect} from "react";
import Routes from "./components/routing/Routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { loadUser } from "./redux/actions/authAction";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  // Load Only Once
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

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

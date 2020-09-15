import React from "react";
import GlobalStyles from "./GlobalStyles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Apps from "./pages/Apps";
import Logs from "./pages/Logs";
import useCookie from "./hooks/useCookie";
import Login from "./pages/Login";

function App() {
  const [authToken] = useCookie("authToken");

  return (
    <div>
      <GlobalStyles />
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Logs</Link>
            </li>
            <li>
              <Link to="/apps">Apps</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/apps">
            <Apps />
          </Route>
          <Route path="/">
            <Logs />
          </Route>
        </Switch>
        {!authToken && <Redirect to="/login" />}
      </Router>
    </div>
  );
}

export default App;

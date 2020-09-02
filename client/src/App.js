import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Apps from "./pages/Apps";
import Logs from "./pages/Logs";

function App() {
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
          <Route path="/apps">
            <Apps />
          </Route>
          <Route path="/">
            <Logs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

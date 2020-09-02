import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/apps">Apps</Route>
          <Route path="/">Logs</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

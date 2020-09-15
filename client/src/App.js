import React from "react";
import GlobalStyles from "./GlobalStyles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Apps from "./pages/Apps";
import Logs from "./pages/Logs";
import useCookie from "./hooks/useCookie";
import Login from "./pages/Login";
import styled from "@emotion/styled";
import Header from "./components/Header";
import { I18nProvider } from "./i18n/context";

const AppHeader = styled(Header)`
  width: 80%;
  max-width: 1125px;
  margin: 3rem auto;
`;

const Main = styled.main`
  width: 80%;
  max-width: 1125px;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  const [authToken] = useCookie("authToken");

  return (
    <I18nProvider dictName={"en"}>
      <Router>
        <GlobalStyles />
        <AppHeader loggedIn={Boolean(authToken)} />
        <Main>
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
        </Main>
      </Router>
    </I18nProvider>
  );
}

export default App;

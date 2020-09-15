import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import PropTypes from "prop-types";
import Header from "./Header";

export default {
  title: "Header",
  component: Header,
};

const Template = ({ route, ...args }) => {
  const history = createMemoryHistory();
  history.push(route);
  return (
    <Router history={history}>
      <Header {...args} />
    </Router>
  );
};
Template.propTypes = {
  route: PropTypes.string,
};

export const Logs = Template.bind({});
Logs.args = {
  route: "/",
  loggedIn: true,
};
export const Apps = Template.bind({ route: "/apps" });
Apps.args = {
  route: "/apps",
  loggedIn: true,
};
export const LoggedOut = Template.bind({});
LoggedOut.args = {
  route: "/login",
  loggedIn: false,
};

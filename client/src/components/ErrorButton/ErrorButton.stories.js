import React from "react";

import ErrorButton from "./ErrorButton";

export default {
  title: "Error Button",
  component: ErrorButton,
};

const Template = (args) => <ErrorButton {...args} />;

export const Error = Template.bind({});
Error.args = {
  children: "Error",
};

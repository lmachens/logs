import React from "react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Default",
  disabled: true,
};

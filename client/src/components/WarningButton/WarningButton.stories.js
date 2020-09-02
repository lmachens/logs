import React from "react";

import WarningButton from "./WarningButton";

export default {
  title: "Warning Button",
  component: WarningButton,
};

const Template = (args) => <WarningButton {...args} />;

export const Warning = Template.bind({});
Warning.args = {
  children: "Warning",
};

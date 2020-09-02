import React from "react";

import InfoButton from "./InfoButton";

export default {
  title: "Info Button",
  component: InfoButton,
};

const Template = (args) => <InfoButton {...args} />;

export const Info = Template.bind({});
Info.args = {
  children: "Info",
};

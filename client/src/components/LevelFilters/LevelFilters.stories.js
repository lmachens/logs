import React from "react";

import LevelFilters from "./LevelFilters";

export default {
  title: "LevelFilters",
  component: LevelFilters,
};

const Template = (args) => <LevelFilters {...args} />;

export const AllActive = Template.bind({});
AllActive.args = {
  error: true,
  warning: true,
  info: true,
};

export const OnlyError = Template.bind({});
OnlyError.args = {
  error: true,
  warning: false,
  info: false,
};

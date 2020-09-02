import React from "react";

import LevelFilters from "./LevelFilters";

export default {
  title: "LevelFilters",
  component: LevelFilters,
};

const Template = (args) => <LevelFilters {...args} />;

export const AllActive = Template.bind({});
AllActive.args = {
  filters: ["error", "warning", "info"],
};

export const OnlyError = Template.bind({});
OnlyError.args = {
  filters: ["error"],
};

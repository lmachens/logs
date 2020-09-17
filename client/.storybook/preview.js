import React from "react";
import GlobalStyles from "../src/GlobalStyles";
import { I18nProvider } from "../src/i18n/context";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const AppDecorator = (Story, context) => {
  return (
    <I18nProvider lang="en">
      <GlobalStyles />
      <Story {...context} />
    </I18nProvider>
  );
};

export const decorators = [AppDecorator];

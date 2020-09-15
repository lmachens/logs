import React from "react";
import GlobalStyles from "../src/GlobalStyles";
import { I18nProvider } from "../src/i18n/context";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const withGlobalStyles = (Story, context) => {
  return (
    <I18nProvider dictName="en">
      <GlobalStyles />
      <Story {...context} />
    </I18nProvider>
  );
};

export const decorators = [withGlobalStyles];

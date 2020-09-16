import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const I18nContext = React.createContext();

export const I18nProvider = ({ children, lang = "en" }) => {
  const [dict, setDict] = useState({ locale: "", messages: {} });

  useEffect(() => {
    changeDict(lang);
  }, [lang]);

  const changeDict = async (lang) => {
    const dict = await import(`./${lang}.json`);
    setDict(dict);
  };

  return (
    <I18nContext.Provider value={[dict, changeDict]}>
      {children}
    </I18nContext.Provider>
  );
};

I18nProvider.propTypes = {
  children: PropTypes.node,
  lang: PropTypes.string.isRequired,
};

export const useI18n = () => {
  return useContext(I18nContext);
};

export const useDict = () => {
  return useI18n()[0];
};

export const useDictMessages = () => {
  return useI18n()[0].messages;
};

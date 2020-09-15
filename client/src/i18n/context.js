import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const I18nContext = React.createContext();

export const useDict = () => {
  return useContext(I18nContext)[0];
};

export const useI18n = () => {
  return useContext(I18nContext);
};

export const I18nProvider = ({ dictName, children }) => {
  const [dict, setDict] = useState({ locale: "", messages: {} });

  useEffect(() => {
    changeDict(dictName);
  }, [dictName]);

  const changeDict = async (dictName) => {
    const dict = await fetch(`/${dictName}.json`).then((response) =>
      response.json()
    );
    // const dict = await import(`/${dictName}.json`);
    setDict(dict);
  };

  return (
    <I18nContext.Provider value={[dict, changeDict]}>
      {children}
    </I18nContext.Provider>
  );
};

I18nProvider.propTypes = {
  dictName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const I18n = ({ name }) => {
  const { messages } = useDict();
  return messages[name] || "";
};

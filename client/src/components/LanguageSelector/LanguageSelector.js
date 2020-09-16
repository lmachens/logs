import React from "react";
import { useI18n } from "../../i18n/context";

const LanguageSelector = () => {
  const [dict, changeDict] = useI18n();

  return (
    <select
      value={dict.locale}
      onChange={(event) => changeDict(event.target.value)}
    >
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
  );
};

export default LanguageSelector;

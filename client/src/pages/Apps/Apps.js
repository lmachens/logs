import React from "react";
import { useDictMessages } from "../../i18n/context";

const Apps = () => {
  const dictMessages = useDictMessages();

  return <div>{dictMessages.comingSoon}</div>;
};

export default Apps;

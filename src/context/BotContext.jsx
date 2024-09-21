"use client";

import { createContext, useState } from "react";

const BotContext = createContext({
  buttonStyle: "",
  setButtonStyle: () => {},
  botPosition: "",
  setBotPosition: () => {},
});

const BotProvider = ({ children }) => {
  const [buttonStyle, setButtonStyle] = useState("");
  const [botPosition, setBotPosition] = useState("");

  return (
    <BotContext.Provider
      value={{ buttonStyle, setButtonStyle, botPosition, setBotPosition }}
    >
      {children}
    </BotContext.Provider>
  );
};

export { BotContext, BotProvider };

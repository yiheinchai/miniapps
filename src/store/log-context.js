import React, { useState } from "react";

export const LogContext = React.createContext({
  count: 0,
  videoTitle: "",
  showSettings: false,
  updateCountHandler() {},
  updateTitleHandler() {},
  updateSettingsHandler() {},
});

export const LogContextProvider = (props) => {
  const [count, setCount] = useState(0);
  const [videoTitle, setVideoTitle] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  const updateCountHandler = (increment) => {
    setCount((prev) => prev + increment);
  };

  const updateTitleHandler = (title) => {
    setVideoTitle(title);
  };

  const updateSettingsHandler = () => {
    setShowSettings((prev) => !prev);
  };

  return (
    <LogContext.Provider
      value={{
        count,
        videoTitle,
        showSettings,
        updateCountHandler,
        updateTitleHandler,
        updateSettingsHandler,
      }}
    >
      {props.children}
    </LogContext.Provider>
  );
};

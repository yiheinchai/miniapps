import { createContext, useState } from "react";

export const OverallContext = createContext({
  profile: {},
  setProfile: () => {},
});

export const OverallContextProvider = (props) => {
  const [profile, setProfile] = useState({});
  return (
    <OverallContext.Provider value={{ profile, setProfile }}>
      {props.children}
    </OverallContext.Provider>
  );
};

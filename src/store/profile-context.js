import { createContext, useReducer } from "react";

export const ProfileContext = createContext({
  profileState: { selectedProfile: {}, generatedProfiles: [] },
  dispatchProfile: () => {},
});

const initialProfileState = {
  selectedProfile: {},
  generatedProfiles: [],
};

function ProfileReducer(state, action) {
  if (action.type === "SELECT_PROFILE") {
    return { ...state, selectedProfile: { ...action.selectedProfile } };
  } else if (action.type === "GENERATE_PROFILE") {
    return {
      ...state,
      generatedProfiles: [...state.generatedProfiles, ...action.generatedProfiles],
    };
  }
}

export const ProfileContextProvider = (props) => {
  const [profileState, dispatchProfile] = useReducer(ProfileReducer, initialProfileState);

  return (
    <ProfileContext.Provider value={{ profileState, dispatchProfile }}>
      {props.children}
    </ProfileContext.Provider>
  );
};

import React from "react";
import { useReducer } from "react";

export const LayoutContext = React.createContext({
  youtube: 1,
  counter: 1,
  nameGenerator: 1,
});

function layoutReducer(state, action) {
  if (action.type === "INCREMENT" && action.widget === "YOUTUBE") {
    return { ...state, youtubeCount: state.youtubeCount + 1 };
  } else if (action.type === "DECREMENT" && action.widget === "YOUTUBE") {
    if (state.youtubeCount <= 0) return { ...state };
    return { ...state, youtubeCount: state.youtubeCount - 1 };
  } else if (action.type === "INCREMENT" && action.widget === "COUNTER") {
    return { ...state, counterCount: state.counterCount + 1 };
  } else if (action.type === "DECREMENT" && action.widget === "COUNTER") {
    if (state.counterCount <= 0) return { ...state };
    return { ...state, counterCount: state.counterCount - 1 };
  } else if (action.type === "INCREMENT" && action.widget === "PROFILE") {
    return { ...state, profileCount: state.profileCount + 1 };
  } else if (action.type === "DECREMENT" && action.widget === "PROFILE") {
    if (state.profileCount <= 0) return { ...state };
    return { ...state, profileCount: state.profileCount - 1 };
  }
}

const layoutInitial = {
  youtubeCount: 1,
  counterCount: 1,
  profileCount: 1,
};

export const LayoutContextProvider = (props) => {
  const [layoutState, dispatchLayout] = useReducer(layoutReducer, layoutInitial);
  return (
    <LayoutContext.Provider value={{ layoutState, dispatchLayout }}>
      {props.children}
    </LayoutContext.Provider>
  );
};

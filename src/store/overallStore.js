import { createStore } from "redux";

const overallReducer = (state = { profile: {} }, action) => {
  if (action.type === "UPDATE_PROFILE") {
    return { ...state, profile: action.value };
  }
  return state;
};

export const overallStore = createStore(overallReducer);

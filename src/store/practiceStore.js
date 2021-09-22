import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createContext, useReducer } from "react";
import { createStore } from "redux";

// CONTEXT API
/*
// Providing
1. Create a context, only fill in default values
2. Create a provider component
3. Create a reducer to add to the provider component
4. Add the reducer state and dispatch function into the values of the provider component
5. Wrap the subscribing components with the provider component

// Consuming
1. Use the useContext hook and plubg in the context as a function parameter
2. Retrieve data from the useContext hook
*/
export const PracProfileContext = createContext({
  pracProfileState: { profile: {} },
  dispatchPracProfile: () => {},
});

function pracProfileReducer(state, action) {
  if (action.type === "UPDATE_PROFILE") {
    return { ...state, profile: action.value };
  }
  return state;
}
export const PracProfileContextProvider = (props) => {
  const [pracProfileState, dispatchPracProfile] = useReducer(pracProfileReducer, { profile: {} });
  return (
    <PracProfileContext.Provider value={{ pracProfileState, dispatchPracProfile }}>
      {props.children}
    </PracProfileContext.Provider>
  );
};

// REDUX NO TOOLKIT
/*
// Providing
1. Create a reducer, make sure the state of the reducer has a default value
2. Create a store and add the reducer in
3. Wrap the subscribing component with the Provider component and set the store to the store created in step 2


//Consuming
1. dispatch({}) => add in the types and values into the object (this value depends on how you designed the reducer)
2. useSelector(state => state.slice_name)
*/

// function pracProfileReduxReducer(state = { profile: {} }, action) {
//   if (action.type === "UPDATE_PROFILE") {
//     return { ...state, profile: action.value };
//   }
//   return state;
// }
// export const PracProfileReduxStore = createStore(pracProfileReduxReducer);

// REDUX TOOLKIT
/*

//Providing
1. Create a slice with the name, initialState, and reducers
2. Write out all the reducers, keeping in mind that mutating is possible
3. Export the actions functions from the reducer
4. Configure the store via configureStore and add all the reducers in the reducer key
5. Wrap all subscribing components into the Provider component, with the store set to the Slice created beforehand

//Consuming
1. const dispatch = useDispatch() 
2. dispatch(action_name({})) -- whatever in the object will be the payload (which is accessed via action.payload in the reducer) 
3. useSelector(state => state.slice_name)
*/
const PracProfileSlice = createSlice({
  name: "pracProfile",
  initialState: { profile: {} },
  reducers: {
    updateProfile(state, action) {
      state.profile = action.payload;
    },
  },
});

export const PracProfileActions = PracProfileSlice.actions;

export const PracProflieToolkitStore = configureStore({
  reducer: {
    pracProfile: PracProfileSlice.reducer,
  },
});

const setEverything = () => {
  return (dispatch) => {
    console.log("HELLO!");
  };
};

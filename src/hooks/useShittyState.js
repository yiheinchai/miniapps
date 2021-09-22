import { useCallback, useState } from "react";

const useShittyState = (config) => {
  const [state, setState] = useState(config.initialState);

  const modifyState = useCallback((increment) => {
    console.log("modifying state...");
    setState(state + increment);
  }, []);

  return [state, modifyState];
};

export default useShittyState;

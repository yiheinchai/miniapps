import { useEffect, useState, useMemo } from "react";
import useShittyState from "../hooks/useShittyState";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const config = useMemo(() => {
    return {
      initialState: 0,
      increment: 1,
    };
  }, []);
  const [shittyCount, setShittyCount] = useShittyState(config);

  useEffect(() => {
    console.log("The count is updating!");
    setShittyCount(1);
  }, [setShittyCount]);

  return (
    <div>
      <h3>Counter Widget</h3>
      <div>{shittyCount}</div>
      <button
        onClick={() => {
          setShittyCount(1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount((prev) => --prev);
        }}
      >
        -
      </button>
    </div>
  );
};

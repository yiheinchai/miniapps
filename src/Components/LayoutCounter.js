import { useContext } from "react";
import { LayoutContext } from "../store/layout-context";

const LayoutCounterStyle = {
  display: "flex",
  flexFlow: "row",
  gap: "1rem",
};

export const LayoutCounter = (props) => {
  const LayoutCtx = useContext(LayoutContext);
  return (
    <div style={LayoutCounterStyle}>
      <p>{props.widget}</p>
      <div>{LayoutCtx.layoutState[props.widgetVariable]}</div>
      <button
        onClick={() => {
          LayoutCtx.dispatchLayout({ type: "INCREMENT", widget: props.widget });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          LayoutCtx.dispatchLayout({ type: "DECREMENT", widget: props.widget });
        }}
      >
        -
      </button>
    </div>
  );
};

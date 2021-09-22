import ReactDOM from "react-dom";
import App from "./App";
import { LogContextProvider } from "./store/log-context";
import { LayoutContextProvider } from "./store/layout-context";
import { OverallContextProvider } from "./store/overall-context";
import { Provider } from "react-redux";
import { overallStore } from "./store/overallStore";
import {
  PracProfileContextProvider,
  PracProfileReduxStore,
  PracProflieToolkitStore,
  toolkitStore,
} from "./store/practiceStore";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <LayoutContextProvider>
      <LogContextProvider>
        <OverallContextProvider>
          <PracProfileContextProvider>
            {/* <Provider store={PracProfileReduxStore}> */}
            <Provider store={PracProflieToolkitStore}>
              <App />
            </Provider>
            {/* </Provider> */}
          </PracProfileContextProvider>
        </OverallContextProvider>
      </LogContextProvider>
    </LayoutContextProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./components/globalStyle/globalStyles";
import { DarkModeContextProvider } from "./context/theme/darkModeContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById("root")
);

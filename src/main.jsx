import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StyledGlobal } from "./styles/stylesGlobal";
import { VariaveisStyles } from "./styles/variaveisStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VariaveisStyles>
      <StyledGlobal />
      <App />
    </VariaveisStyles>
  </React.StrictMode>,
);

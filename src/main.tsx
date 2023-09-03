import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { GlobalStyles } from "./styles/GlobalStyles.ts";
import { AlpacaContextProvider } from "./AlpacaContext/Context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AlpacaContextProvider>
      <App />
      <GlobalStyles />
    </AlpacaContextProvider>
  </React.StrictMode>
);

import React from "react";
import * as ReactDOMClient from "react-dom/client";
import RouterSwitch from "./RouterSwitch";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(
  <React.StrictMode>
    <RouterSwitch />
  </React.StrictMode>
);

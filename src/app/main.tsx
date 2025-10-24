import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Core } from "./core";

import "./styles/index.css";

const root = document.querySelector("#root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <StrictMode>
    <Core />
  </StrictMode>,
);

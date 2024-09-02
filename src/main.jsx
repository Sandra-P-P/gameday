import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import <SaltProvider>
import { SaltProviderNext } from "@salt-ds/core";
// Import theme CSS
import "@salt-ds/theme/index.css";
import "@salt-ds/theme/css/theme-next.css";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SaltProviderNext density="touch" theme="dark" corner="rounded">
      <App />
    </SaltProviderNext>
  </StrictMode>,
);

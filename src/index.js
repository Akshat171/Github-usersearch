import React, { Suspense, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
import { Loader } from "./components";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <StrictMode>
      <HelmetProvider>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </HelmetProvider>
    </StrictMode>
  </Router>
);

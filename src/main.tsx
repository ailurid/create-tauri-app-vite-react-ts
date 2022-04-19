import React from "react";
import ReactDOM from "react-dom/client";

import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme

import App from "./app/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

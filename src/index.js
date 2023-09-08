import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Constants
import global_en from "./constants/en/global.json";
import global_ca from "./constants/ca/global.json";
import global_es from "./constants/es/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "ca",
  resources: {
    en: {
      global: global_en,
    },
    ca: {
      global: global_ca,
    },
    es: {
      global: global_es,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

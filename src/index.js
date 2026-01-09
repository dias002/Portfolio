import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router";
import i18n from "./i18n";

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
);



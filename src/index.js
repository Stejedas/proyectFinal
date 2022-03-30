import React from 'react';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemingProvider from './Components/mult-theming/theming.provider';

import { I18nextProvider } from "react-i18next";
import i18next from "i18next"

import global_es from './Routes/i18n/traslations/es/global.json'
import global_en from './Routes/i18n/traslations/en/global.json'
import translation_es from './Routes/i18n/traslations/es/translation.json'
import translation_en from './Routes/i18n/traslations/en/translation.json'

i18next.init({
  interpolation: {escapeValue: false},

  lng: "es",
   

  resources: {
    es:{
      global: global_es,
      translation: translation_es
    },
    en:{
      global: global_en,
      translation: translation_en
    },
  }
})

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <ThemingProvider>
    <App />
    </ThemingProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

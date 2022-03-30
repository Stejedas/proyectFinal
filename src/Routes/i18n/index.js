import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// ¿No quieres usar esto?
// echa un vistazo a la guía de inicio rápido 
// para pasar lng y traducciones en el init

i18n
  // cargue la traducción usando http -> vea /public/locales (es decir, https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // más información: https://github.com/i18next/i18next-http-backend
  // ¿quieres que tus traducciones se carguen desde un CDN profesional? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detectar el idioma del usuario
  // más información: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pasar la instancia i18n a react-i18next.
  .use(initReactI18next)
  // init i18next
  // para todas las opciones leer: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'es',
    debug: true,

    interpolación: {
      escapeValue: false, // no es necesario para react ya que escapa por defecto
    }
  });
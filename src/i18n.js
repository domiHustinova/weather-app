import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./services/translations/en.json";
import translationSK from "./services/translations/sk.json";

const resources = {
  en: {
    translation: translationEN,
  },
  sk: {
    translation: translationSK,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

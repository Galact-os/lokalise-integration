import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import englishTranslation from "./localizations/en.json";
import russianTranslation from "./localizations/ru.json";
import spanishTranslation from "./localizations/es.json";

const resources = {
  en_US: {
    translation: englishTranslation
  },
  ru: {
    translation: russianTranslation
  },
  es: {
    translation: spanishTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en_US',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
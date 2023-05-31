import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import englishTranslation from "./locale/en.json";
import russianTranslation from "./locale/ru.json";
import spanishTranslation from "./locale/es.json";

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
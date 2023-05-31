import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en_US: {
    translation: {
      "dp_explr_stage_teachSubHeadingLabel": "Teach",
      "dp_explr_action_curriculumDrpDwnBtn": "Curriculum",
      "dp_explr_action_levelDrpDwnBtn": "Level",
      "dp_explr_action_moduleButton": "Module",
      "dp_all_flow_upNext": "Up Next",
      "dp_all_all_greatMinds": "GREAT MINDS"
    }
  },
  ru: {
    translation: {
      "dp_explr_stage_teachSubHeadingLabel": "Научить",
      "dp_explr_action_curriculumDrpDwnBtn": "Учебная программа",
      "dp_explr_action_levelDrpDwnBtn": "Уровень",
      "dp_explr_action_moduleButton": "Модуль",
      "dp_all_flow_upNext": "Далее",
      "dp_all_all_greatMinds": "GREAT MINDS"
  }
  },
  es: {
      translation: {
        "dp_explr_stage_teachSubHeadingLabel": "Enseña",
        "dp_explr_action_curriculumDrpDwnBtn": "Plan de estudios",
        "dp_explr_action_levelDrpDwnBtn": "Nivel",
        "dp_explr_action_moduleButton": "Módulo",
        "dp_all_flow_upNext": "A continuación",
        "dp_all_all_greatMinds": "GREAT MINDS"
    }
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
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJSON from '../locales/en.json';
import cnJSON from '../locales/zh_CN.json';
const resources = {
  en: {
    translation: {
      ...enJSON,
    },
  },
  zh_CN: {
    translation: {
      ...cnJSON,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh_CN',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

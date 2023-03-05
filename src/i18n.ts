import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import translationEN from '../public/locales/en/translation.json';
import translationUA from '../public/locales/ua/translation.json';
const resources = {
  en: {
    translation: translationEN
  },
  ua: {
    translation: translationUA
  }
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources
  });


export default i18n;

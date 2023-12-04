import i18n from 'i18next';
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next/initReactI18next';
import en from './locales/en/translation.json'
import tr from './locales/tr/translation.json'

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: en
      },
      tr: {
        translation: tr
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from '../local/languages/en.json';
import tr from '../local/languages/tr.json';
import de from '../local/languages/de.json';
import ru from '../local/languages/ru.json';

const LANGUAGE_KEY = 'appLanguage';

(async () => {
  const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
  if (savedLang) {
    i18n.changeLanguage(savedLang);
  }
})();

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    AsyncStorage.getItem(LANGUAGE_KEY).then((language) => {
      if (language) {
        callback(language);
      } else {
        callback('en'); // default
      }
    });
  },
  init: () => {},
  cacheUserLanguage: (language) => {
    AsyncStorage.setItem(LANGUAGE_KEY, language);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    resources: {
    en: { translation: en },
    tr: { translation: tr },
    de: { translation: de },
    ru: { translation: ru },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

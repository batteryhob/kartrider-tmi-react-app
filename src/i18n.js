import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import kr from './i18n/kr'
import en from './i18n/en'
import cn from './i18n/cn'

const resources = {
  ...kr,
  ...en,
  ...cn,
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    keySeparator: '.', // 중첩키 사용시 필수

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
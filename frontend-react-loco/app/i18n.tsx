import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationArabic from "./translations/arabic/translation.json";
import translationEnglish from "./translations/english/translation.json";
import translationFrench from "./translations/french/translation.json";
import translationGerman from "./translations/german/translation.json";
import translationJapanese from "./translations/german/translation.json";
import translationKorean from "./translations/german/translation.json";
import translationPortuguese from "./translations/german/translation.json";
import translationRussian from "./translations/german/translation.json";
import translationSpanish from "./translations/spanish/translation.json";

const resources = {
    us: {
        home: translationEnglish
    },
    es: {
        home: translationSpanish
    },
    fr: {
        home: translationFrench
    },
    de: {
        home: translationGerman
    },
    pt: {
        home: translationPortuguese
    },
    ae: {
        home: translationArabic
    },
    ru: {
        home: translationRussian
    },
    jp: {
        home: translationJapanese
    },
    kr: {
        home: translationKorean
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "us",
    });

export default i18next;
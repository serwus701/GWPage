import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import pl from './pl.json'
import en from './en.json'

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'pl',
        resources: {
            pl: {
                translation: pl
            },
            en: {
                translation: en
            }
        }
    })
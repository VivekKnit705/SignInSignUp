import React, { Suspense } from 'react';
import ReactDom from "react-dom";
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import App from "./App";

i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        // Options for language detector
        detection: {
            order: ['path', 'cookie', 'htmlTag'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '/assets/i18n/{{lng}}/translation.json',
        },
    })

ReactDom.render(
    <Suspense fallback={<div>Loading... </div>}>
        <App />
    </Suspense>,
    document.querySelector("#root"));
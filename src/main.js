import './assets/settings/style.scss'
import './assets/settings/fonts.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { createApp } from 'vue'
import App from './App.vue'

/* ===== GLOBAL LANGUAGE ===== */
import { currentLang, translations, toggleLang } from './components/i18n.js'


const app = createApp(App)

/* ===== PROVIDE GLOBAL LANGUAGE ===== */
app.provide('currentLang', currentLang)
app.provide('translations', translations)
app.provide('toggleLang', toggleLang)

/* ===== MOUNT APP ===== */
app.mount('#app')

<script setup>
import { ref, provide, watch } from 'vue'
import Header from '@/components/Header/Header.vue'
import Main from '@/components/Main/Main.vue'
import Footer from '@/components/Footer/Footer.vue'

/* ===== GLOBAL TIL TIZIMI (NavBar va Footer shu yerdan oladi) ===== */
const currentLang = ref('en')

const translations = {
  en: { home: 'Home', destination: 'Destination', tour: 'Tour', blog: 'Blog', contact: 'Contact' },
  ru: { home: 'Главная', destination: 'Направления', tour: 'Туры', blog: 'Блог', contact: 'Контакты' },
  uz: { home: 'Bosh sahifa', destination: "Yo'nalishlar", tour: 'Turlar', blog: 'Blog', contact: 'Aloqa' },
}

const langOrder = ['en', 'ru', 'uz']
const toggleLang = () => {
  const i = langOrder.indexOf(currentLang.value)
  currentLang.value = langOrder[(i + 1) % langOrder.length]
}

provide('currentLang', currentLang)
provide('translations', translations)
provide('toggleLang', toggleLang)

watch(currentLang, (lang) => {
  document.documentElement.lang = lang
}, { immediate: true })
</script>

<template>
  <Header/>
  <Main/>
  <Footer/>
</template>
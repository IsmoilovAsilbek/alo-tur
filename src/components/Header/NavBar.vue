<script setup>
import { ref, computed, inject, unref } from 'vue'

/* ===== GLOBAL LANGUAGE ===== */
const currentLang = inject('currentLang')
const translations = inject('translations')
const toggleLang = inject('toggleLang')

// Tugmada KEYINGI til ko'rinadi: en -> ru -> uz -> en
const langOrder = ['en', 'ru', 'uz']
const nextLang = computed(() => {
  const i = langOrder.indexOf(unref(currentLang))
  return langOrder[(i + 1) % langOrder.length]
})

const links = [
  { key: 'home', href: '#home' },
  { key: 'destination', href: '#destination' },
  { key: 'tour', href: '#tour' },
  { key: 'blog', href: '#blog' },
  { key: 'contact', href: '#contact' },
]

/* ===== MOBILE MENU ===== */
const menuOpen = ref(false)
const closeMenu = () => (menuOpen.value = false)

/* ===== NAV DOT ANIMATION ===== */
const listRef = ref(null)
const dotLeft = ref(0)
const dotVisible = ref(false)

const moveDot = (event) => {
  if (!listRef.value) return
  const link = event.currentTarget.getBoundingClientRect()
  const list = listRef.value.getBoundingClientRect()
  dotLeft.value = link.left - list.left + link.width / 2 - 4
  dotVisible.value = true
}
</script>

<template>
  <nav class="nav">
    <div class="nav-block container">
      <a href="#home" class="nav-block__logo" @click="closeMenu">
        <img src="@/assets/images/nav-log.svg" alt="Alo Tur" class="nav-logo__img" />
      </a>

      <ul ref="listRef" class="nav-block__list" :class="{ 'is-open': menuOpen }">
        <li v-for="link in links" :key="link.key">
          <a
              class="nav-list__link"
              :href="link.href"
              @mouseenter="moveDot"
              @focus="moveDot"
              @click="closeMenu"
          >
            {{ translations[currentLang][link.key] }}
          </a>
        </li>
        <li class="nav-dot" :class="{ 'is-visible': dotVisible }" :style="{ left: dotLeft + 'px' }"
            aria-hidden="true"></li>
      </ul>

      <div class="nav-block__communication">
        <img src="@/assets/images/Search-logo.svg" alt="Search" class="nav-communication__search" />
        <img src="@/assets/images/communication-log.svg" alt="Account" class="nav-communication__user" />

        <!-- GLOBAL LANGUAGE BUTTON -->
        <button class="nav-communication__launge" type="button" @click="toggleLang">
          {{ nextLang }}
        </button>

        <!-- BURGER (faqat telefon/planshetda) -->
        <button
            class="nav-burger"
            :class="{ 'is-open': menuOpen }"
            type="button"
            aria-label="Menu"
            :aria-expanded="menuOpen"
            @click="menuOpen = !menuOpen"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: relative;
  z-index: 50;
  animation: navIn 0.7s ease both;
}

@keyframes navIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.nav-block {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.nav-block::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #fff;
}

.nav-logo__img {
  display: block;
  max-width: 100%;
}

.nav-block__list {
  display: flex;
  gap: clamp(24px, 4vw, 60px);
  padding: 30px 0;
  position: relative;
  list-style: none;
}

.nav-list__link {
  position: relative;
  font-family: 'inter-regular';
  font-size: 15px;
  letter-spacing: 0.08em;
  color: #fff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.55);
  transition: color 0.3s ease;
}

.nav-list__link:hover,
.nav-list__link:focus-visible {
  color: #10E9DD;
  outline: none;
}

/* sakrab yuruvchi nuqta */
.nav-dot {
  position: absolute;
  bottom: 0;
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 50%;
  transform: translateY(50%);
  opacity: 0;
  pointer-events: none;
  transition: left 0.35s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.3s ease;
}

.nav-dot.is-visible {
  opacity: 1;
}

.nav-block__communication {
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-communication__search,
.nav-communication__user {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.nav-communication__search:hover,
.nav-communication__user:hover {
  transform: scale(1.15);
}

.nav-communication__launge {
  background: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
  color: #fff;
  padding: 6px 12px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background 0.3s ease, color 0.3s ease;
}

.nav-communication__launge:hover {
  background: #fff;
  color: #0d1b2a;
}

/* burger */
.nav-burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 0 9px;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 6px;
  cursor: pointer;
}

.nav-burger span {
  display: block;
  height: 2px;
  background: #fff;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.nav-burger.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-burger.is-open span:nth-child(2) { opacity: 0; }
.nav-burger.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .nav-burger {
    display: flex;
  }

  .nav-logo__img {
    max-width: 110px;
  }

  .nav-block__list {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    padding: 0;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    background: rgba(13, 27, 42, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 0 0 12px 12px;
    transition: max-height 0.4s ease, opacity 0.3s ease, visibility 0.4s;
  }

  .nav-block__list.is-open {
    max-height: 420px;
    opacity: 1;
    visibility: visible;
  }

  .nav-list__link {
    display: block;
    padding: 16px 24px;
  }

  .nav-dot {
    display: none;
  }
}

@media (max-width: 480px) {
  .nav-block__communication {
    gap: 12px;
  }
}
</style>
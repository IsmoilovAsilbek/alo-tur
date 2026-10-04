<script setup>
import { ref, inject, unref, onMounted, onBeforeUnmount } from 'vue'
import { vReveal } from '@/directives/reveal'
import img1 from '@/assets/images/Image 1.png'
import img2 from '@/assets/images/Image 2.png'
import img3 from '@/assets/images/Image 3.png'
import img4 from '@/assets/images/Image 4.png'

/* Til: NavBar bilan bir xil (App.vue dan provide qilinadi) */
const currentLang = inject('currentLang', 'en')
const translations = inject('translations', null)
const label = (key, fallback) => translations?.[unref(currentLang)]?.[key] ?? fallback

const year = new Date().getFullYear()

const links = [
  { key: 'home', href: '#home', fallback: 'Home' },
  { key: 'destination', href: '#destination', fallback: 'Destination' },
  { key: 'tour', href: '#tour', fallback: 'Tour Types' },
  { key: 'blog', href: '#blog', fallback: 'Blog' },
  { key: 'contact', href: '#contact', fallback: 'Contact Us' },
]

// O'zingizning sahifalaringiz havolasini qo'ying
const socials = [
  { name: 'Facebook', icon: 'fa-facebook-f', href: '#' },
  { name: 'Twitter', icon: 'fa-twitter', href: '#' },
  { name: 'Instagram', icon: 'fa-instagram', href: '#' },
  { name: 'LinkedIn', icon: 'fa-linkedin-in', href: '#' },
]

/* ===== RASM GALEREYASI (strelkalar rasmlarni aylantiradi) ===== */
const images = ref([
  { id: 1, src: img1, alt: 'Travel moment 1' },
  { id: 2, src: img2, alt: 'Travel moment 2' },
  { id: 3, src: img3, alt: 'Travel moment 3' },
  { id: 4, src: img4, alt: 'Travel moment 4' },
])

const next = () => {
  const a = images.value
  images.value = [...a.slice(1), a[0]]
}
const prev = () => {
  const a = images.value
  images.value = [a[a.length - 1], ...a.slice(0, -1)]
}

/* ===== NAV DOT ===== */
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

/* ===== YUQORIGA TUGMASI ===== */
const showTop = ref(false)
const onScroll = () => {
  showTop.value = window.scrollY > 500
}
const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <footer id="contact" class="footer">
    <div class="footer-content container">
      <div class="footer-content__top">
        <h2 class="footer-top__title" v-reveal>Make memories with us</h2>
        <div class="stat-line" v-reveal="{ from: 'zoom', delay: 100 }"></div>

        <div class="footer-top__icons">
          <a
              v-for="(s, i) in socials"
              :key="s.name"
              :href="s.href"
              :aria-label="s.name"
              class="footer-icons__link"
              v-reveal="{ delay: 150 + i * 80 }"
          >
            <i :class="['fa-brands', s.icon, 'footer-icons__icon']"></i>
          </a>
        </div>

        <div class="footer-content__wrapper" v-reveal="{ delay: 200 }">
          <button
              type="button"
              class="footer-content__arrow footer-content__arrow--left"
              aria-label="Previous photo"
              @click="prev"
          >&#8592;</button>

          <TransitionGroup name="gallery" tag="div" class="footer-content__images">
            <img
                v-for="img in images"
                :key="img.id"
                :src="img.src"
                :alt="img.alt"
                loading="lazy"
            >
          </TransitionGroup>

          <button
              type="button"
              class="footer-content__arrow footer-content__arrow--right"
              aria-label="Next photo"
              @click="next"
          >&#8594;</button>
        </div>

        <p class="footer-content__text" v-reveal>Get the best offers first.</p>
      </div>

      <div class="footer-content__bottom">
        <div class="stat-line__two"></div>

        <div class="footer-bottom__latest">
          <a href="#home" class="footer-latest__logo">
            <img src="@/assets/images/Logo.png" alt="Alo Tur" class="footer-latest__img">
          </a>

          <ul ref="listRef" class="footer-latest__list">
            <li v-for="l in links" :key="l.key">
              <a
                  :href="l.href"
                  class="footer-list__link"
                  @mouseenter="moveDot"
                  @focus="moveDot"
              >{{ label(l.key, l.fallback) }}</a>
            </li>
            <li class="footer-dot" :class="{ 'is-visible': dotVisible }"
                :style="{ left: dotLeft + 'px' }" aria-hidden="true"></li>
          </ul>
        </div>

        <p class="footer-copy">© {{ year }} Alo Tur. All rights reserved.</p>
      </div>
    </div>

    <Transition name="top">
      <button v-if="showTop" type="button" class="footer-top" aria-label="Back to top" @click="toTop">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
             stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"/>
          <polyline points="5 12 12 5 19 12"/>
        </svg>
      </button>
    </Transition>
  </footer>
</template>

<style scoped>
.footer {
  background: #1a1a1a;
}

/* ===== YUQORI QISM ===== */
.footer-content__top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 100px;
}

.footer-top__title {
  font-family: 'satisfy-regular';
  font-weight: 400;
  font-size: clamp(36px, 7vw, 60px);
  line-height: 120%;
  letter-spacing: 0.03em;
  text-align: center;
  color: #fff;
  padding-bottom: 15px;
}

.stat-line {
  width: 150px;
  height: 1px;
  background: #fff;
  margin: 12px 0;
}

/* ijtimoiy tarmoqlar */
.footer-top__icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  padding-top: 30px;
  padding-bottom: 80px;
}

.footer-icons__link {
  display: inline-flex;
  color: #fff;
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer-icons__link:hover,
.footer-icons__link:focus-visible {
  color: #3fd0d4;
  transform: translateY(-6px) scale(1.1);
  outline: none;
}

.footer-icons__icon {
  font-size: 30px;
}

/* ===== GALEREYA ===== */
.footer-content__wrapper {
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.footer-content__images {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 180px));
  justify-content: center;
  gap: 30px;
}

.footer-content__images img {
  width: 100%;
  aspect-ratio: 180 / 220;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.4s ease, filter 0.4s ease, box-shadow 0.4s ease;
}

.footer-content__images img:hover {
  transform: translateY(-8px) scale(1.04);
  filter: brightness(1.12);
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.5);
}

/* strelka bosilganda rasmlar o'rin almashadi */
.gallery-move {
  transition: transform 0.5s ease;
}

.footer-content__arrow {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease;
}

.footer-content__arrow:hover,
.footer-content__arrow:focus-visible {
  background: #fff;
  color: #1a1a1a;
  outline: none;
}

.footer-content__arrow:active {
  transform: scale(0.92);
}

.footer-content__text {
  font-family: 'outfit-regular';
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  text-align: center;
  color: #f9fbff;
  opacity: 0.9;
  padding-top: 45px;
}

/* ===== PASTKI QISM ===== */
.stat-line__two {
  height: 1px;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.2);
}

.footer-bottom__latest {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.footer-latest__img {
  display: block;
  width: 147px;
  height: auto;
  max-width: 100%;
}

.footer-latest__list {
  position: relative;
  display: flex;
  column-gap: 35px;
  padding-bottom: 20px;
  list-style: none;
}

.footer-list__link {
  font-family: 'poppins-regular';
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  letter-spacing: 0.08em;
  color: #fff;
  transition: color 0.3s ease;
}

.footer-list__link:hover,
.footer-list__link:focus-visible {
  color: #3fd0d4;
  outline: none;
}

.footer-dot {
  position: absolute;
  bottom: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff;
  transform: translateY(50%);
  opacity: 0;
  pointer-events: none;
  transition: left 0.35s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.3s ease;
}

.footer-dot.is-visible {
  opacity: 1;
}

.footer-copy {
  padding: 10px 0 30px;
  font-family: 'poppins-regular';
  font-size: 12px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
}

/* ===== YUQORIGA TUGMASI ===== */
.footer-top {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 100;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 50%;
  background: #3fd0d4;
  color: #0d1b2a;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(63, 208, 212, 0.45);
  transition: transform 0.3s ease, background 0.3s ease;
}

.footer-top svg {
  width: 22px;
  height: 22px;
}

.footer-top:hover {
  background: #2fc1c5;
  transform: translateY(-4px);
}

.top-enter-active,
.top-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.top-enter-from,
.top-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .footer-content__top {
    padding-top: 100px;
    padding-bottom: 70px;
  }

  .footer-top__icons {
    padding-bottom: 50px;
  }

  .footer-content__images {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
  }

  .footer-latest__list {
    column-gap: 22px;
  }
}

@media (max-width: 700px) {
  .footer-content__wrapper {
    flex-wrap: wrap;
    gap: 20px;
  }

  .footer-content__images {
    order: 1;
    width: 100%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .footer-content__arrow--left {
    order: 2;
  }

  .footer-content__arrow--right {
    order: 3;
  }

  .footer-bottom__latest {
    flex-direction: column;
    gap: 24px;
  }

  .footer-latest__list {
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 14px;
    column-gap: 22px;
  }

  .footer-dot {
    display: none;
  }

  .footer-top {
    right: 16px;
    bottom: 16px;
  }
}

@media (max-width: 420px) {
  .footer-content__top {
    padding-top: 70px;
    padding-bottom: 50px;
  }

  .footer-content__text {
    font-size: 16px;
    padding-top: 30px;
  }
}
</style>
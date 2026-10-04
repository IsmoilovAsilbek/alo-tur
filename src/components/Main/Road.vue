<script setup lang="ts">
import { ref } from 'vue'
import { vReveal } from '@/directives/reveal'

const email = ref('')
const subscribed = ref(false)

const subscribe = () => {
  if (!email.value) return
  // TODO: bu yerga o'z API so'rovingizni qo'shing (fetch / axios)
  subscribed.value = true
  email.value = ''
  setTimeout(() => (subscribed.value = false), 4000)
}
</script>

<template>
  <section class="road">
    <!-- NEWSLETTER: ikki bo'lim chegarasida suzib turadi -->
    <div class="road-newslatter">
      <form class="road-newslatter__from" @submit.prevent="subscribe" v-reveal>
        <div class="road-form__titles">
          <h2 class="road-newslatter__title">Join Newsletter</h2>
          <p class="road-newslatter__text">To receive our best deals</p>
        </div>
        <input
            v-model.trim="email"
            class="road-newslatter__input"
            type="email"
            placeholder="Enter Your Email"
            aria-label="Email"
            required
        >
        <button class="road-newslatter__button" type="submit" :disabled="subscribed">
          {{ subscribed ? 'THANK YOU!' : 'SUBSCRIBE' }}
        </button>
      </form>
    </div>

    <div class="road-content">
      <div class="road-content__left" v-reveal="{ from: 'left' }">
        <img src="@/assets/images/Left%20Side%20Content.png" alt="Road trip" class="road-left__photo">
      </div>
      <div class="road-content__right" v-reveal="{ from: 'right', delay: 150 }">
        <h2 class="road-right__title">Hit The Road</h2>
        <p class="road-right__text">If you are looking for a fun, exciting and challenging outdoor adventure
          activity center, look no further than Mill on the Brue! When we planning your trip, why start
          anywhere else?</p>
        <div class="stat-line"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.road {
  position: relative;
  width: 100%;
  margin-top: 150px;
}

/* ===== NEWSLETTER ===== */
.road-newslatter {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  transform: translateY(-50%);
  pointer-events: none;
}

.road-newslatter__from {
  pointer-events: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px 30px;
  width: 100%;
  max-width: 1174px;
  padding: 20px 50px;
  border-radius: 8px;
  box-shadow: 0 4px 25px 0 rgba(70, 70, 70, 0.16);
  background: linear-gradient(120deg, #3fd0d4, #2ab5ce);
}

.road-newslatter__title {
  font-family: 'oswald-bold';
  font-weight: 700;
  font-size: 32px;
  line-height: 140%;
  color: #fff;
}

.road-newslatter__text {
  font-family: 'rubik-bold';
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #fff;
  max-width: 184px;
}

.road-newslatter__input[type="email"] {
  flex: 2 1 280px;
  min-width: 0;
  padding: 25px 15px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-family: 'rubik-bold';
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #464646;
  transition: box-shadow 0.3s ease;
}

.road-newslatter__input[type="email"]:focus {
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.45);
}

.road-newslatter__button {
  flex: 0 0 auto;
  padding: 25px 28px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.4s ease, transform 0.3s ease;
}

.road-newslatter__button:hover:not(:disabled) {
  background-color: #555;
  transform: translateY(-3px);
}

.road-newslatter__button:disabled {
  background-color: #1f8f6a;
  cursor: default;
}

/* ===== HIT THE ROAD ===== */
.road-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}

.road-content__left {
  min-height: 360px;
}

.road-left__photo {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.road-content__right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px clamp(24px, 5vw, 80px);
}

.road-right__title {
  font-family: 'oswald-bold';
  font-weight: 700;
  font-size: clamp(44px, 6vw, 80px);
  line-height: 130%;
  letter-spacing: 0.07em;
  color: #363636;
  padding-bottom: 20px;
}

.road-right__text {
  font-family: 'rubik-bold';
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  color: #6b6b6b;
  max-width: 500px;
  padding-bottom: 15px;
}

.stat-line {
  width: 100px;
  height: 10px;
  background: #3fd0d4;
  margin: 12px 0;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .road {
    margin-top: 230px;
  }

  .road-newslatter__from {
    flex-direction: column;
    align-items: stretch;
    padding: 24px;
    text-align: center;
  }

  .road-newslatter__text {
    max-width: 100%;
  }

  .road-newslatter__input[type="email"] {
    flex: none;
    padding: 20px 15px;
  }

  .road-content {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .road-content__left {
    height: 380px;
  }

  .road-content__right {
    padding: 50px 24px 70px;
  }
}
</style>
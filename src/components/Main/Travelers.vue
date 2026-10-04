<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { vReveal } from '@/directives/reveal'

// DIQQAT: 2 va 3-sharh namuna (placeholder). Haqiqiy sharhlar bilan almashtiring.
const reviews = [
  {
    title: 'The planning process was excellent',
    name: 'Howard Reed',
    date: '15/05/2023',
    text: '“It was a life changing experience and we couldn’t be happier to have done it, learned so much, seen so much, and escaped from work for a couple of weeks!”',
  },
  {
    title: 'Everything was perfectly organized',
    name: 'Sarah Mitchell',
    date: '02/07/2023',
    text: '“From the first call to the last day, the team took care of every detail. We just had to enjoy the trip. Already planning the next one!”',
  },
  {
    title: 'Best holiday we have ever had',
    name: 'Daniel Carter',
    date: '19/09/2023',
    text: '“Great guides, great prices and places we would never have found on our own. Highly recommended for families and friends alike.”',
  },
]

const index = ref(0)
let timer = null

const go = (i) => {
  index.value = (i + reviews.length) % reviews.length
}
const next = () => go(index.value + 1)
const prev = () => go(index.value - 1)

const stop = () => clearInterval(timer)
const play = () => {
  stop()
  timer = setInterval(next, 6000)
}

onMounted(play)
onBeforeUnmount(stop)
</script>

<template>
  <section class="happy-travelers container">
    <div class="happy-travelers__left" v-reveal="{ from: 'left' }">
      <img src="@/assets/images/main-travelers-left.svg" alt="Happy travelers" class="happy-travelers__left-img">
    </div>

    <div class="happy-travelers__right">
      <div class="happy-box__top" v-reveal>
        <h2 class="happy-top__small">Reviews</h2>
        <h2 class="happy-top__big">Happy Travelers</h2>
        <div class="happy-top__hr"></div>
      </div>

      <div
          class="happy-right__bottom"
          v-reveal="{ delay: 150 }"
          @mouseenter="stop"
          @mouseleave="play"
      >
        <Transition name="review" mode="out-in">
          <div :key="index" class="happy-review">
            <div class="happy-bottom__stars">
              <h3 class="happy-stars__title">{{ reviews[index].title }}</h3>
              <img src="@/assets/images/stars.svg" alt="5 stars" class="happy-stars__img">
            </div>

            <div class="happy-bottom__reed">
              <h4 class="happy-reed__title">{{ reviews[index].name }}</h4>
              <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"
                   aria-hidden="true">
                <circle cx="2" cy="2" r="2" fill="#6B6B6B"/>
              </svg>
              <p class="happy-reed__data">{{ reviews[index].date }}</p>
            </div>

            <p class="happy-bottom__text">{{ reviews[index].text }}</p>
          </div>
        </Transition>

        <div class="happy-bottom__icons">
          <button type="button" class="happy-icons__btn" aria-label="Previous review" @click="prev">
            <img src="@/assets/images/Right.svg" alt="">
          </button>
          <button type="button" class="happy-icons__btn" aria-label="Next review" @click="next">
            <img src="@/assets/images/Left.svg" alt="">
          </button>

          <div class="happy-dots">
            <button
                v-for="(r, i) in reviews"
                :key="r.name"
                type="button"
                class="happy-dot"
                :class="{ 'is-active': i === index }"
                :aria-label="`Review ${i + 1}`"
                @click="go(i)"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.happy-travelers {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding-top: 50px;
  padding-bottom: 30px;
}

.happy-travelers__left {
  min-width: 0;
}

.happy-travelers__left-img {
  display: block;
  max-width: 100%;
  height: auto;
}

.happy-travelers__right {
  width: 100%;
  max-width: 540px;
}

.happy-top__small {
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  text-align: center;
  color: #3fd0d4;
}

.happy-top__big {
  font-weight: 700;
  font-size: clamp(30px, 4vw, 42px);
  line-height: 140%;
  text-align: center;
  color: #363636;
}

.happy-top__hr {
  max-width: 150px;
  width: 100%;
  height: 2px;
  background: black;
  margin: 12px auto 30px;
}

.happy-right__bottom {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  min-height: 281px;
  padding: 24px 28px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 65px 0 rgba(0, 0, 0, 0.08);
}

.happy-review {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.happy-bottom__stars {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 30px;
}

.happy-stars__title {
  font-weight: 700;
  font-size: 22px;
  line-height: 150%;
  color: #464646;
}

.happy-bottom__reed {
  display: flex;
  align-items: center;
  gap: 10px;
}

.happy-reed__title {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #6b6b6b;
}

.happy-reed__data {
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  color: #959595;
}

.happy-bottom__text {
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #959595;
}

/* strelkalar */
.happy-bottom__icons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.happy-icons__btn {
  display: inline-flex;
  padding: 6px;
  background: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.25s ease, background 0.25s ease;
}

.happy-icons__btn:hover {
  background: #e9fafa;
  transform: scale(1.12);
}

.happy-dots {
  display: flex;
  gap: 8px;
  margin-left: auto;
}

.happy-dot {
  width: 8px;
  height: 8px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: #d6d6d6;
  cursor: pointer;
  transition: background 0.3s ease, width 0.3s ease;
}

.happy-dot.is-active {
  width: 22px;
  border-radius: 4px;
  background: #3fd0d4;
}

/* sharhlar almashish animatsiyasi */
.review-enter-active,
.review-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.review-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.review-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .happy-travelers {
    flex-direction: column;
    gap: 30px;
  }

  .happy-travelers__left-img {
    max-width: 420px;
    margin: 0 auto;
  }

  .happy-travelers__right {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .happy-right__bottom {
    padding: 20px 18px;
  }

  .happy-stars__title {
    font-size: 18px;
  }
}
</style>
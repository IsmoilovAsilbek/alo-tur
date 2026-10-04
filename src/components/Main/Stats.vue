<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const stats = [
  { value: 12, label: 'AMAZING DEALS' },
  { value: 670, label: 'SOLD TOURS' },
  { value: 24, label: 'NEW TOURS' },
  { value: 980, label: 'HAPPY CUSTOMERS' },
]

const counts = ref(stats.map(() => 0))
const root = ref(null)
let observer = null
let frame = 0

// Raqamlar ekranga kelganda 0 dan sanab chiqadi
const animate = () => {
  const duration = 1800
  const start = performance.now()
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - p, 3)
    counts.value = stats.map((s) => Math.round(s.value * eased))
    if (p < 1) frame = requestAnimationFrame(tick)
  }
  frame = requestAnimationFrame(tick)
}

onMounted(() => {
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  if (reduce || !('IntersectionObserver' in window)) {
    counts.value = stats.map((s) => s.value)
    return
  }
  observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate()
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
  )
  observer.observe(root.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  cancelAnimationFrame(frame)
})
</script>

<template>
  <section ref="root" class="happy-amazing">
    <div class="happy-amazing__box">
      <div v-for="(stat, i) in stats" :key="stat.label" class="happy-box__numbers">
        <div class="happy-numbers__array">
          <h2 class="happy-array__amount">{{ counts[i] }}</h2>
          <div class="stat-line"></div>
          <p class="happy-array__title">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.happy-amazing {
  background: url("@/assets/images/mainBG.jpg") no-repeat center / cover;
  width: 100%;
  min-height: 515px;
  padding: 60px 20px;
  display: flex;
  align-items: center;
}

.happy-amazing__box {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 20px;
}

.happy-box__numbers {
  text-align: center;
}

.happy-numbers__array {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* RAQAMLAR: outline (yaxshiroq usul - text-stroke) */
.happy-array__amount {
  font-family: 'oswald-bold';
  font-weight: 700;
  font-size: clamp(56px, 7vw, 96px);
  line-height: 1;
  letter-spacing: 0.07em;
  font-variant-numeric: tabular-nums;
  color: transparent;
  -webkit-text-stroke: 2px #fff;
  transition: color 0.4s ease;
}

.happy-numbers__array:hover .happy-array__amount {
  color: #fff;
}

.stat-line {
  width: 150px;
  max-width: 100%;
  height: 1px;
  background: #fff;
  margin: 12px 0;
}

.happy-array__title {
  font-family: 'oswald-medium';
  font-weight: 500;
  font-size: clamp(18px, 2.2vw, 32px);
  line-height: 120%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #fff;
}

@media (max-width: 900px) {
  .happy-amazing__box {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 420px) {
  .happy-amazing__box {
    gap: 32px 10px;
  }

  .stat-line {
    width: 90px;
  }
}
</style>
<script setup>
import { vReveal } from '@/directives/reveal'
import cairns from '@/assets/images/cairns.jpg'
import orlando from '@/assets/images/orlando.jpg'
import malaysia from '@/assets/images/malaysia.jpg'

const tours = [
  {
    id: 1,
    img: cairns,
    price: '$150/day',
    place: 'Cairns QLD, Australia',
    title: 'Cairns Travel',
    date: 'April 12, 2023',
    duration: '5 Days',
  },
  {
    id: 2,
    img: orlando,
    price: '$110/day',
    place: 'Orlando, FL, USA',
    title: 'Orlando Travel',
    date: 'May 10, 2023',
    duration: '3 Days',
  },
  {
    id: 3,
    img: malaysia,
    price: '$136/day',
    place: 'Malaysia',
    title: 'Malaysia Travel',
    date: 'Oct 28, 2023',
    duration: '5 Days',
  },
]
</script>

<template>
  <section id="tour" class="tours">
    <div class="tours-box" v-reveal>
      <p class="tour-mini__title">Featured Tour</p>
      <h2 class="tour-title">Our Best Tours</h2>
      <span class="tours-box__line"></span>
    </div>

    <div class="tours-list">
      <article
          v-for="(tour, i) in tours"
          :key="tour.id"
          class="tour-card"
          v-reveal="{ delay: i * 150 }"
      >
        <div class="tour-card__image">
          <img :src="tour.img" :alt="tour.title" loading="lazy">
          <span class="tour-card__price">{{ tour.price }}</span>
        </div>

        <div class="tour-card__content">
          <div class="tour-card__location">
            <img src="@/assets/images/Location.svg" alt="">
            {{ tour.place }}
          </div>

          <h3 class="tour-card__title">{{ tour.title }}</h3>

          <div class="tour-card__info">
                        <span class="tour-card__meta">
                            <img src="@/assets/images/Calendar.svg" alt="">
                            {{ tour.date }}
                        </span>
            <span class="tour-card__meta">
                            <img src="@/assets/images/Clock.svg" alt="">
                            {{ tour.duration }}
                        </span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.tours {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 80px 20px;
}

.tours-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
}

.tour-mini__title {
  font-family: 'satisfy-regular';   /* oldin 'satusfy-regular' edi (xato yozilgan) */
  font-weight: 400;
  font-size: 25px;
  line-height: 120%;
  letter-spacing: 0.06em;
  text-align: center;
  color: #3fd0d4;
}

.tour-title {
  font-family: 'oswald-bold';
  font-size: clamp(30px, 4vw, 42px);
  line-height: 140%;
  text-align: center;
  color: #363636;
}

/* oldin oq rangda edi - oq fonda ko'rinmasdi */
.tours-box__line {
  display: block;
  width: 150px;
  height: 3px;
  border-radius: 2px;
  background: #3fd0d4;
}

.tours-list {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 30px;
}

/* CARD */
.tour-card {
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.tour-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 22px 45px rgba(0, 0, 0, 0.15);
}

/* IMAGE */
.tour-card__image {
  position: relative;
  aspect-ratio: 450 / 420;
  overflow: hidden;
}

.tour-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.tour-card:hover .tour-card__image img {
  transform: scale(1.08);
}

/* PRICE */
.tour-card__price {
  font-family: 'oswald-medium';
  position: absolute;
  right: 8px;
  bottom: 8px;
  background: #2ec4c6;
  color: #fff;
  padding: 10px 18px;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.tour-card:hover .tour-card__price {
  transform: scale(1.06);
}

/* CONTENT */
.tour-card__content {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tour-card__location {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'rubik-regular';
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  color: #959595;
}

.tour-card__title {
  font-family: 'oswald-bold';
  font-weight: 700;
  font-size: clamp(28px, 3vw, 42px);
  line-height: 140%;
  color: #363636;
}

.tour-card__info {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  font-family: 'rubik-regular';
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  color: #6b6b6b;
}

.tour-card__meta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

@media (max-width: 600px) {
  .tours {
    padding: 50px 16px;
  }

  .tour-card__location {
    font-size: 17px;
  }

  .tour-card__info {
    font-size: 16px;
  }
}
</style>
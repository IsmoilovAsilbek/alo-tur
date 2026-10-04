<script setup lang="ts">
import { vReveal } from '../../directives/reveal'
</script>

<template>
  <section id="destination" class="category">
    <div class="category-content">

      <div class="category-one container">

        <div class="category-left" v-reveal="{ from: 'left' }">
          <h2 class="category-title">
            It’s Time For a <span>New Adventure!</span> Don’t Wait Any Longer.
          </h2>

          <p class="category-text">
            Our team of travel insiders is obsessed with finding the best things to do everywhere we travel.
            From Paris to Phuket to Perth, from traditional tours to once-in-a-lifetime experiences, we have
            something for every kind of traveler. And we are proud to say that after 17 experience-packed
            years, we are the world leader. When planning your trip, why start anywhere else?
          </p>

          <h3 class="category-name">Howard</h3>
          <p class="category-role">CEO Foundation</p>
        </div>

        <div
            class="category-right"
            v-reveal="{ from: 'right', delay: 150 }"
        >
          <img
              src="@/assets/images/Rignt%20Content.png"
              alt="Travelers enjoying a trip"
          >
        </div>

      </div>

      <div class="category-bottom">

        <div class="category-bottom__boxes container">

          <div
              class="category-boxes__box"
              v-reveal="{ delay: 0 }"
          >
            <img
                src="@/assets/images/Group.png"
                alt=""
                class="category-box_photo"
            >
            <p class="category-box_text">
              Relax and have fun.
            </p>
          </div>

          <div
              class="category-boxes__box"
              v-reveal="{ delay: 120 }"
          >
            <img
                src="@/assets/images/Dish%20Icon.png"
                alt=""
                class="category-box_photo"
            >
            <p class="category-box_text">
              Try local specialties.
            </p>
          </div>

          <div
              class="category-boxes__box"
              v-reveal="{ delay: 240 }"
          >
            <img
                src="@/assets/images/Group%20(1).png"
                alt=""
                class="category-box_photo"
            >
            <p class="category-box_text">
              Discover unknown places.
            </p>
          </div>

          <div
              class="category-boxes__box"
              v-reveal="{ delay: 360 }"
          >
            <img
                src="@/assets/images/Group%20(2).png"
                alt=""
                class="category-box_photo"
            >
            <p class="category-box_text">
              Enjoy at great price.
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.category {
  width: 100%;
  padding-top: 100px;
  background: #fff;
}

.category-content {
  width: 100%;
  background: #fff;
}

.category-one {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.category-left {
  width: 100%;
  max-width: 600px;
}

.category-title {
  margin: 0;
  padding-bottom: 15px;

  font-family: var(--second-family);
  font-weight: 700;
  font-size: clamp(28px, 4vw, 42px);
  line-height: 140%;
  color: #363636;
}

.category-title span {
  color: #3fd0d4;
}

.category-text {
  width: 100%;
  max-width: 495px;

  margin: 0;
  padding-bottom: 40px;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #6b6b6b;
}

.category-name {
  margin: 0;
  padding-bottom: 15px;

  font-family: 'satisfy-regular';
  font-weight: 400;
  font-size: 35px;
  line-height: 120%;
  letter-spacing: 0.06em;
  color: #6b6b6b;
}

.category-role {
  margin: 0;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #6b6b6b;
}

.category-right {
  flex-shrink: 0;
  width: 100%;
  max-width: 437px;
}

.category-right img {
  display: block;
  width: 100%;
  height: auto;

  aspect-ratio: 437 / 319;
  object-fit: cover;

  border-radius: 6px;
}

/* =========================
   PASTKI 4 TA QUTI
========================= */

.category-bottom {
  width: 100%;
  margin-top: 100px;
  margin-bottom: 50px;

  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;

  background: #fff;
}

.category-bottom__boxes {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.category-boxes__box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  min-height: 200px;
  padding: 60px 20px;

  text-align: center;

  border-right: 1px solid #eaeaea;

  background: #fff;

  transition:
      background 0.3s ease,
      transform 0.3s ease;
}

.category-boxes__box:last-child {
  border-right: none;
}

.category-boxes__box:hover {
  background: #f4fdfd;
}

.category-box_photo {
  display: block;

  transition:
      transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.category-boxes__box:hover .category-box_photo {
  transform: translateY(-8px) scale(1.08);
}

.category-box_text {
  margin: 0;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #464646;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {
  .category {
    padding-top: 60px;
  }

  .category-one {
    flex-direction: column;
    align-items: stretch;
  }

  .category-left {
    max-width: 100%;
  }

  .category-text {
    max-width: 100%;
  }

  .category-right {
    max-width: 100%;
  }

  .category-right img {
    width: 100%;
  }

  .category-bottom {
    margin-top: 60px;
  }

  .category-bottom__boxes {
    grid-template-columns: repeat(2, 1fr);
  }

  .category-boxes__box {
    min-height: 180px;
    padding: 36px 16px;

    border-bottom: 1px solid #eaeaea;
  }

  .category-boxes__box:nth-child(2n) {
    border-right: none;
  }

  .category-boxes__box:nth-last-child(-n + 2) {
    border-bottom: none;
  }
}

@media (max-width: 480px) {
  .category {
    padding-top: 40px;
  }

  .category-one {
    gap: 30px;
  }

  .category-title {
    font-size: 28px;
  }

  .category-text {
    font-size: 15px;
  }

  .category-name {
    font-size: 28px;
  }

  .category-boxes__box {
    min-height: 160px;
    padding: 30px 10px;
  }

  .category-box_text {
    font-size: 16px;
  }
}

@media (max-width: 360px) {
  .category-bottom__boxes {
    grid-template-columns: 1fr;
  }

  .category-boxes__box {
    border-right: none;
    border-bottom: 1px solid #eaeaea;
  }

  .category-boxes__box:last-child {
    border-bottom: none;
  }
}
</style>
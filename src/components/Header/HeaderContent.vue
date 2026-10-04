<script setup>
import { reactive } from 'vue'

const destinations = ['Cairns, Australia', 'Orlando, USA', 'Malaysia']
const tourTypes = ['Adventure', 'Relax', 'Family', 'Cultural']
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const form = reactive({
  destination: '',
  tourType: '',
  month: '',
  price: '',
})

// Hozircha formani yuborganda "Our Best Tours" bo'limiga silliq o'tadi.
// Keyin shu yerga backend so'rovini qo'shish mumkin.
const onSubmit = () => {
  document.getElementById('tour')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="header-content container">
    <div class="header-content__left">
      <h1 class="header-left__title">
        Dare to <span>Live</span>
        the <span>Life</span> you’ve
        wanted
      </h1>
      <div class="header-left__box">
        <a href="#tour" class="header-box__link">Discover More</a>
        <div class="header-box__watch">
                    <span class="header-watch__icon">
                        <img src="@/assets/images/Play%20Button.svg" alt="" class="header-watch__play">
                    </span>
          <a href="#" class="header-watch__btn" @click.prevent>Watch video</a>
        </div>
      </div>
    </div>

    <form class="header-content__right" @submit.prevent="onSubmit">
      <h2 class="header-right__title">Book Perfect Tour</h2>

      <div class="header-field">
        <select v-model="form.destination" class="header-field__select" aria-label="Destination">
          <option value="" disabled>Destination</option>
          <option v-for="item in destinations" :key="item" :value="item">{{ item }}</option>
        </select>
        <img src="@/assets/images/Location%20Icon.svg" alt="" class="header-field__icon">
      </div>

      <div class="header-field">
        <select v-model="form.tourType" class="header-field__select" aria-label="Tour type">
          <option value="" disabled>Tour Type</option>
          <option v-for="item in tourTypes" :key="item" :value="item">{{ item }}</option>
        </select>
        <img src="@/assets/images/Caret%20down.svg" alt="" class="header-field__icon">
      </div>

      <div class="header-field">
        <select v-model="form.month" class="header-field__select" aria-label="Month">
          <option value="" disabled>Month</option>
          <option v-for="item in months" :key="item" :value="item">{{ item }}</option>
        </select>
        <img src="@/assets/images/Caret%20down.svg" alt="" class="header-field__icon">
      </div>

      <label class="header-price">
        <span class="header-price__title">Price</span>
        <input v-model="form.price" type="number" min="0" placeholder="$" class="header-price__input">
      </label>

      <div class="header-price__button">
        <button type="submit" class="header-price__btn">Book Now</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  margin-top: 60px;
}

/* ===== CHAP TOMON ===== */
.header-content__left {
  max-width: 560px;
  width: 100%;
  animation: fadeUp 0.9s ease both;
}

.header-left__title {
  max-width: 520px;
  font-family: 'oswald-bold';
  font-weight: 700;
  font-size: clamp(40px, 6.5vw, 90px);
  line-height: 120%;
  color: #fff;
  margin-bottom: 10px;
}

.header-left__title span {
  color: #10E9DD;
}

.header-left__box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px 20px;
}

/* umumiy tugma (link va button uchun) */
.header-box__link,
.header-price__btn {
  position: relative;
  overflow: hidden;
  display: inline-flex;           /* <a> da width/height ishlashi uchun */
  align-items: center;
  justify-content: center;
  width: 174px;
  height: 54px;
  border: 0;
  border-radius: 9px;
  cursor: pointer;

  font-family: 'oswald-medium';
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #fff;

  background: #3fd0d4;
  box-shadow: 0 8px 20px rgba(63, 208, 212, 0.3);
  transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
}

.header-box__link::before,
.header-price__btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.6), transparent);
  transition: left 0.6s ease;
}

.header-box__link:hover,
.header-price__btn:hover {
  background: #2fc1c5;
  transform: translateY(-4px);
  box-shadow: 0 14px 30px rgba(63, 208, 212, 0.45);
}

.header-box__link:hover::before,
.header-price__btn:hover::before {
  left: 100%;
}

.header-box__link:active,
.header-price__btn:active {
  transform: translateY(-1px);
  box-shadow: 0 6px 14px rgba(63, 208, 212, 0.35);
}

.header-box__watch {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* play tugmasi atrofida tinimsiz to'lqin */
.header-watch__icon {
  position: relative;
  display: inline-flex;
  border-radius: 50%;
  cursor: pointer;
}

.header-watch__icon::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.7);
  animation: ring 2s ease-out infinite;
}

.header-watch__play {
  position: relative;
  transition: transform 0.3s ease;
}

.header-watch__icon:hover .header-watch__play {
  transform: scale(1.1);
}

@keyframes ring {
  0% { transform: scale(1); opacity: 0.9; }
  100% { transform: scale(1.7); opacity: 0; }
}

.header-watch__btn {
  position: relative;
  display: inline-block;
  font-family: 'oswald-medium';
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;
}

/* chiziq */
.header-watch__btn::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background-color: #fff;
  transition: width 0.4s ease;
}

/* dumaloq */
.header-watch__btn::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -9px;
  width: 6px;
  height: 6px;
  background-color: #fff;
  border-radius: 50%;
  opacity: 0;
  transition: left 0.4s ease, opacity 0.2s ease;
}

.header-watch__btn:hover {
  color: #3fd0d4;
}

.header-watch__btn:hover::after {
  width: 100%;
}

.header-watch__btn:hover::before {
  left: 100%;
  opacity: 1;
}

/* ===== O'NG TOMON (FORMA) ===== */
.header-content__right {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 432px;
  width: 100%;
  padding: clamp(20px, 4vw, 40px);
  background-color: rgba(67, 169, 242, 0.6);
  backdrop-filter: blur(6px);
  border: 1px solid #fff;
  border-radius: 6px;
  box-shadow: 0 7px 60px 0 rgba(0, 0, 0, 0.25);
  animation: slideIn 0.9s 0.2s ease both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

.header-right__title {
  font-family: 'nunito-medium';
  font-weight: 500;
  font-size: clamp(24px, 3vw, 32px);
  line-height: 120%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #fff;
}

.header-field {
  position: relative;
  border: 1px solid #fff;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.header-field:hover,
.header-field:focus-within {
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 0 0 3px rgba(16, 233, 221, 0.35);
}

.header-field__select {
  width: 100%;
  padding: 20px 60px 20px 30px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;

  font-family: 'nunito-regular';
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  color: #fff;
}

.header-field__select option {
  color: #1d2b36;
  background: #fff;
}

.header-field__icon {
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.header-price {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
}

.header-price__title {
  font-family: 'nunito-regular';
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  color: #fff;
}

.header-price__input {
  flex: 1;
  min-width: 0;
  padding: 10px 14px;
  border: 0;
  border-radius: 4px;
  outline: 0;
  font-size: 20px;
  line-height: 160%;
  transition: box-shadow 0.3s ease;
}

.header-price__input:focus {
  box-shadow: 0 0 0 3px rgba(16, 233, 221, 0.6);
}

.header-price__button {
  display: flex;
  justify-content: center;
}

.header-price__btn {
  margin-top: 10px;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .header-content {
    flex-direction: column;
    align-items: stretch;
    margin-top: 40px;
  }

  .header-content__left,
  .header-left__title,
  .header-content__right {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .header-field__select {
    padding: 16px 50px 16px 18px;
    font-size: 16px;
  }

  .header-field__icon {
    right: 18px;
  }

  .header-price {
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
  }
}
</style>
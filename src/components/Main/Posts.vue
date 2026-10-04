<script setup>
import { vReveal } from '@/directives/reveal'
import blog1 from '@/assets/images/Blog 1.svg'
import blog2 from '@/assets/images/Blog 2.svg'
import blog3 from '@/assets/images/Blog 3.svg'

const posts = [
  { id: 1, img: blog1, date: 'June 17, 2022', title: 'A Lot Of Traveling Turns You Into A Storyteller' },
  { id: 2, img: blog2, date: 'July 24, 2022', title: 'Travel Makes One Modest And Opened To Ideas' },
  { id: 3, img: blog3, date: 'August 12, 2022', title: 'Discover New Oceans By Losing Sight Of The Shore' },
]
</script>

<template>
  <section id="blog" class="posts">
    <div class="posts-box container">
      <div class="posts-box__titles" v-reveal>
        <h2 class="posts-titles__minititle">Blog Posts</h2>
        <h2 class="posts-titles__title">Recent Articles & Posts</h2>
        <div class="posts-box__hr"></div>
      </div>

      <div class="posts-box__images">
        <article
            v-for="(post, i) in posts"
            :key="post.id"
            class="post-card"
            v-reveal="{ delay: i * 150 }"
        >
          <div class="post-card__bg" :style="{ backgroundImage: `url(${post.img})` }"></div>
          <div class="post-card__body">
            <time class="posts-first__minititle">{{ post.date }}</time>
            <h3 class="posts-first__title">{{ post.title }}</h3>
          </div>
        </article>
      </div>

      <a href="#" class="posts-box__bottom" v-reveal @click.prevent>
        <img src="@/assets/images/Left%20(1).svg" alt="" class="bottom__img">
        <span class="posts-bottom__title">SEE ALL POSTS</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.posts {
  padding-top: 80px;
}

.posts-titles__minititle {
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  text-align: center;
  color: #3fd0d4;
}

.posts-titles__title {
  font-weight: 700;
  font-size: clamp(30px, 4vw, 42px);
  line-height: 140%;
  text-align: center;
  color: #363636;
}

.posts-box__hr {
  max-width: 160px;
  width: 100%;
  height: 2px;
  background: black;
  margin: 12px auto;
}

.posts-box__images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 30px;
  padding-top: 60px;
  padding-bottom: 30px;
}

/* KARTA */
.post-card {
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: flex-end;
  min-height: 470px;
  padding: 24px 20px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}

.post-card__bg {
  position: absolute;
  inset: 0;
  z-index: -2;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: transform 0.8s ease;
}

/* matn o'qilishi uchun pastdan qoraytirish */
.post-card::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0) 60%);
}

.post-card:hover .post-card__bg {
  transform: scale(1.08);
}

.posts-first__minititle {
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #fff;
}

.posts-first__title {
  max-width: 350px;
  font-weight: 900;
  font-size: 24px;
  line-height: 150%;
  color: #fff;
  transition: color 0.3s ease;
}

.post-card:hover .posts-first__title {
  color: #10E9DD;
}

/* SEE ALL POSTS */
.posts-box__bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 30px;
}

.bottom__img {
  transition: transform 0.35s ease;
}

.posts-bottom__title {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #464646;
  transition: color 0.3s ease;
}

.posts-box__bottom:hover .bottom__img {
  transform: translateX(8px);
}

.posts-box__bottom:hover .posts-bottom__title {
  color: #3fd0d4;
}

@media (max-width: 600px) {
  .posts {
    padding-top: 50px;
  }

  .post-card {
    min-height: 380px;
  }

  .posts-first__title {
    font-size: 21px;
  }
}
</style>
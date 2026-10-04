<script setup>
import NavBar from "@/components/Header/NavBar.vue";
import HeaderContent from "@/components/Header/HeaderContent.vue";
</script>

<template>
  <header id="home" class="header">
    <NavBar/>
    <HeaderContent/>
  </header>
</template>

<style scoped>
.header {
  /* 100vh o'rniga min-height: kichik ekranda forma sig'may qolmasligi uchun */
  min-height: 100vh;
  min-height: 100svh;
  padding-bottom: 60px;
  background: url("@/assets/images/headerBg.png") no-repeat center / cover;
}
</style>
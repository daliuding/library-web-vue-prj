<script setup>
import NavBar from './components/NavBar.vue'
import SearchBox from './components/SearchBox.vue';
import News from './components/News.vue';
</script>

<template>
<!-- 导航栏 -->
<NavBar />
<!-- 导航路由 -->
<router-view />

<main class="main">
  <SearchBox />
  <News />
</main>

</template>

<style scoped>
  header {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
  }
  main {
    padding: 1rem;
  }
</style>

<template>
    <nav class="navbar">
      <div class="navbar-brand">我的图书馆</div>
      <ul class="nav-links">
        <li v-for="item in items" :key="item.name">
            <router-link :to="item.url" class="nav-link">{{ item.name }}</router-link>
        </li>

      </ul>
    </nav>

</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    { name: '首页', url: '/' },
    { name: '服务', url: '/service' },
    { name: '活动', url: '/activity' },
]);


</script>

<style scoped>
  .navbar { 
    background: #f8f9fa;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 1rem;
  }

  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }
  .nav-link {
    text-decoration: none;
    color: #ffffff;
    transition: color 0.3s, background-color 0.3s;
    background-color: #007bff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
  }

  .nav-link:hover {
    background-color: #0056b3;
  }

  .nav-link:hover {
    color: #abd0e8;
  }


</style>
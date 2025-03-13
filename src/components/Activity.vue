<template>
    <div class="activity">
        <h2>活动</h2>
        <div v-for="act in activities" :key="act.id">
            <router-link :to="act.linkTo">
                <p>{{ act.content }}</p>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    activities: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>
.activity  {
    flex: 1;
    padding: 1rem;
    border: 1px solid #ccc;
    height: 100%; /* 占满父容器高度 */
    overflow-y: auto; /* 如果内容过多，允许滚动 */
    background-color: #ffffff; /* 背景色 */
    border-radius: 8px; /* 圆角 */
}
.activity h2 {
    margin: 0;
    font-size: 1.3rem;
}
.activity p {
    margin: 0;
    padding: 0;
    color: #333;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
}
.activity a {
    text-decoration: none;
}

/* 鼠标悬停变浅蓝色 */
.activity p:hover {
    color: #007bff;
}



</style>
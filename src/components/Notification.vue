<template>
    <div class="notification">
        <h2>通知</h2>
        <div v-for="notice in notifications" :key="notice.id">
            <router-link :to="notice.linkTo">
                <p>{{ notice.content }}</p>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    notifications: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>
.notification {
    flex: 1;
    padding: 1rem;
    border: 1px solid #ccc;
    height: 100%; /* 占满父容器高度 */
    overflow-y: auto; /* 如果内容过多，允许滚动 */
    background-color: #fff; /* 背景色 */
    border-radius: 8px; /* 圆角 */
}
.notification h2 {
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
}
.notification p {
    margin: 0;
    padding: 0;
    color: #333;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
}
.notification a {
    text-decoration: none;
}

/* 鼠标悬停变浅蓝色 */
.notification p:hover {
    color: #007bff;
}

</style>
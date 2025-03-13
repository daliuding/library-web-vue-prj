<template>
<div class="news-area">
    <FocusPic :pictures="pictures" />
    <Notification :notifications="notifications" />
    <Activity :activities="activities" />
</div>
</template>

<script setup>
import { ref } from 'vue';
import FocusPic from './FocusPic.vue';
import Notification from './Notification.vue';
import Activity from './Activity.vue';

const pictures = ref([{
    id: 1,
    imageurl: 'https://www.dl-library.net.cn/uploads/userup/2503/0P9325SC0.jpg',
    linkTo: '/notification/1'
}, {
    id: 2,
    imageurl: 'https://www.dl-library.net.cn/uploads/userup/2503/0P9325SC0.jpg',
    linkTo: '/notification/2'
}, {
    id: 3,
    imageurl: 'https://www.dl-library.net.cn/uploads/userup/2503/0P9395G930.jpg',
    linkTo: '/notification/2'
}]);

const notifications = ref([{
    id: 0,
    content: '通知1',
    linkTo: '/notification/1'
}, {
    id: 1,
    content: '通知2',
    linkTo: '/notification/2'
}]);
const activities = ref([{
    id: 0,
    content: '活动1',
    linkTo: '/notification/1'
}, {
    id: 1,
    content: '活动2',
    linkTo: '/notification/2'
}]);
</script>

<style>
.news-area {
    display: flex;
    gap: 0.5rem;
    height: 20vh;
    max-width: 63%;
    margin: 0 auto; 
    margin-top: 1rem;
}

/* 定义所有直接子元素 */
.news-area > * { 
    margin-top: 1rem;
    border-radius: 20px;
    min-height: 100%;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
/* 定义第一个直接子元素 */
.news-area > *:nth-child(1) {
    width: 40%;
}



</style>
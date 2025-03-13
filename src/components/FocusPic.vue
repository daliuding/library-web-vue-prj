<template>
    <div class="focus-pic">
        <div class="pic-container" >
            <div 
                v-for="pic in pictures" 
                :key="pic.id"
                class="pic-item"
                :class="{ 'active': activePicId === pic.id }"
            >
                <router-link :to="pic.linkTo"> 
                    <img :src="pic.imageurl" :alt="'焦点图' + pic.id"/>
                </router-link>
            </div>

        </div>

        <button class="prev-button" @click="prevPic">&#10094 {{ activePicId}} </button>
        <button class="next-button" @click="nextPic">&#10095</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    pictures: {
        type: Array,
        required: true
    }
});

const activePicId = ref(props.pictures[0].id);


const nextPic = () => {
    activePicId.value = (activePicId.value + 1) % props.pictures.length;
};

const prevPic = () => {
    activePicId.value = (activePicId.value - 1 + props.pictures.length) % props.pictures.length;
};

</script>

<style scoped>
.focus-pic {
  position: relative;
  width: 100%; /* 根据实际需求调整宽度 */
  height: 100%; /* 根据实际需求调整高度 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.pic-container {
  display: flex;
  width: 100%;
  height: 150%;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;
}

.pic-item {
  min-width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.pic-item.active {
  opacity: 1;
}

.pic-item img {
  width: 100%;
  object-fit: cover; /* 确保图片填充容器 */
  border-radius: 8px;
}

/* 切换按钮样式 */
.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 18px;
  transition: background-color 0.3s;
}

.prev-button:hover,
.next-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}
</style>

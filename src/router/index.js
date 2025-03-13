import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件
import Home from '../views/Home.vue'
import Service from '../views/Service.vue'
import Activity from '../views/Activity.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/activity',
    name: 'Activity',
    component: Activity
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
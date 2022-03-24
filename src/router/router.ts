import { createWebHistory, createRouter } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Landing from '@/views/Landing/index.vue'
import userStore from '@/store/user'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: Landing
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  const isLogged = userStore.getters.isLogged
  console.log(to.meta.requiresAuth)
  if (to.meta.requiresAuth && !isLogged) {
    return { name: 'login' }
  }
})

export default router

import { createWebHistory, createRouter } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Landing from '@/views/Landing/index.vue'
import SignUp from '@/views/Signup/index.vue'
import userStore from '@/store/user'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: Landing
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp
  },
  {
    path: '/home',
    name: 'Home',
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
    return { name: 'Login' }
  }
})

export default router

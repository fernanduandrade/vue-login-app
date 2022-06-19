<template>
  <div class="nav">
    <div class="nav-logo">Contador</div>
    <div class="navigation">
      <ul class="navigation-bar">
        <li class="navigation-links">Home</li>
        <li class="navigation-links">Serviços</li>
        <li class="navigation-links">Sobre nos</li>
        <li class="navigation-links">Contato</li>
      </ul>
    </div>
    <div
      class="nav-access"
      v-if="routerName === 'Home'"
    >
      <span class="nav-access__signup" @click="logout">Logout</span>
    </div>
    <div
      v-else-if="routerName !== 'Login' && routerName !== 'Signup'"
      class="nav-access"
    >
      <span @click="goToLogin">Login</span> | <span class="nav-access__signup" @click="goToSignup">Cadastrar</span>
    </div>
    <div v-else></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import userStore from '@/store/user'
export default defineComponent({
  name: 'Nav',
  setup () {
    const router = useRouter()
    const goToLogin = () => router.push({ name: 'Login' })
    const goToSignup = () => router.push({ name: 'Signup' })
    const routerName = router.currentRoute.value.name
    const logout = async () => {
      await userStore.logout()
      router.push({ name: 'Login' })
    }
    return { goToLogin, routerName, goToSignup, router, logout }
  }
})
</script>
<style scoped lang="scss">
 @import './sass/_base.scss'
</style>

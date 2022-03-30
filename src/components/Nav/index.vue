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
      v-if="routerName !== 'Login' && routerName !== 'Signup'"
    >
      <span @click="goToLogin">Login</span> | <span @click="goToSignup">Cadastrar</span>
    </div>
    <div v-else></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Nav',
  setup () {
    const router = useRouter()
    const goToLogin = () => router.push({ name: 'Login' })
    const goToSignup = () => router.push({ name: 'Signup' })
    const routerName = router.currentRoute.value.name
    return { goToLogin, routerName, goToSignup, router }
  }
})
</script>
<style scoped lang="scss">
 @import './sass/_base.scss'
</style>

<template>
  <Nav />
  <div class="container">
    <div class="counter">
      <h3 class="counter-text">{{ state.count }} x 2 = {{ getters.timesTwo }}</h3>

      <button class="counter-button" @click="increment(1)">Incrementar</button>
    </div>
  </div>
</template>

<script lang="ts">
import Nav from '@/components/Nav/index.vue'
import { defineComponent } from 'vue'
import userStore from '@/store/user'
import counterStore from '@/store/counter'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  components: {
    Nav
  },
  setup () {
    const { state, getters, increment } = counterStore

    const router = useRouter()

    const logout = async () => {
      await userStore.logout()
      router.push({ name: 'Login' })
    }

    return { state, getters, increment, userStore, logout }
  }
})
</script>
<style scoped lang="scss">
@import "./sass/_base.scss";
</style>

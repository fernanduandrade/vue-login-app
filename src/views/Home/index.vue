<template>
    <h3> {{ state.count }} x 2 = {{ getters.timesTwo }}</h3>

    <button @click="increment(1)">
        Incrementar
    </button>
    <button @click="logout">SAIR</button>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import userStore from '@/store/user'
import counterStore from '@/store/counter'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  setup () {
    const { state, getters, increment } = counterStore

    const router = useRouter()

    const logout = async () => {
      await userStore.logout()
      router.push({ name: 'login' })
    }

    return { state, getters, increment, userStore, logout }
  }
})
</script>

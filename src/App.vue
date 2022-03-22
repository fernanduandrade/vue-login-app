<template>
  <div v-if="!userStore.getters.isLogged">
    <Form />
  </div>
  <div v-else>
    <Counter />
  </div>
  <button v-if="userStore.getters.isLogged" @click="userStore.logout">SAIR</button>
</template>

<script lang="ts">
import '@/styles/global-style'
import { defineComponent, onMounted } from 'vue'
import Counter from './components/Counter/Counter.vue'
import Form from '@/components/Form/Form.vue'
import userStore from '@/store/user'

export default defineComponent({
  name: 'App',
  components: {
    Counter,
    Form
  },
  setup () {
    // onMounted(userStore.getUser)
    return { userStore }
  }
})
</script>

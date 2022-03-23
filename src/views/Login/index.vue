<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label>Usuário</label>
      <input
        v-model="form.username"
        type="text"
        required
        placeholder="teste do usuário"
      />
    </div>
    <div class="form">
      <label>Senha</label>
      <input
        v-model="form.password"
        type="password"
        required
        placeholder="teste senha secreta"
      />
    </div>
    <div>{{ userStore.state.error }}</div>
    <button type="submit">ENTRAR</button>
  </form>
  <button>cadastrar</button>
</template>
<script lang="ts">

import { defineComponent, reactive } from 'vue'
import userStore from '@/store/user'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Login',
  setup () {
    const form = reactive({
      username: '',
      password: ''
    })

    const router = useRouter()

    const onSubmit = async () => {
      const response = await userStore.login(form.username, form.password)
      console.log(response)
      if (response) {
        router.push({ name: 'home' })
      }
    }

    return { form, userStore, onSubmit }
  }
})

</script>

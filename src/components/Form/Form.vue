<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label>Usuário</label>
      <StyledInput
        v-model="form.username"
        type="text"
        required
        placeholder="teste do usuário"
      />
    </div>
    <div class="form">
      <label>Senha</label>
      <St
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
import { StyledInput } from './styles'

export default defineComponent({
  components: {
    StyledInput
  },
  setup () {
    const form = reactive({
      username: '',
      password: ''
    })

    const onSubmit = () => {
      userStore.login(form.username, form.password)
    }

    return { form, userStore, onSubmit }
  }
})

</script>

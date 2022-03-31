<template>
  <Nav />
  <div class="container">
    <form class="form" @submit.prevent="onSubmit">
      <h3 class="form-heading__main">Crie sua conta</h3>
      <div class="form-group">
        <input
          class="form-input"
          v-model="form.name"
          type="text"
          required
          placeholder="Nome completo"
        />
        <button class="form-button__icons" disabled>
          <i class="gg-pen"></i>
        </button>
      </div>
      <div class="form-group">
        <input
          class="form-input"
          v-model="form.username"
          type="text"
          required
          placeholder="Nome de usuário"
        />
        <button class="form-button__icons" disabled>
          <i class="gg-profile"></i>
        </button>
      </div>
      <div class="form-group">
        <input
        class="form-input"
          v-model="form.password"
          type="password"
          required
          placeholder="Senha"
        />
        <button class="form-button__icons" disabled>
          <i class="gg-lock"></i>
        </button>
      </div>
      <div class="response">
        <span class="response-message">{{ userStore.state.error }}</span>
      </div>
      <button class="form-button" type="submit">REGISTRAR</button>
    </form>
    <div class="user">
      <span class="user-signup">
        Possui uma conta? <span @click="goToLogin" title="Login" class="user-signup__button">Entre aqui</span>
      </span>
      <p title="Home" class="user-goback" @click="goToHome">Voltar a página inicial</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import userStore from '@/store/user'
import { useRouter } from 'vue-router'
import Nav from '@/components/Nav/index.vue'

export default defineComponent({
  name: 'SignUp',
  components: {
    Nav
  },
  setup () {
    const form = reactive({
      name: '',
      username: '',
      password: ''
    })
    const router = useRouter()
    const onSubmit = async () => {
      const response = await userStore.register(form.name, form.username, form.password)
      console.log(response)
      if (response) {
        router.push({ name: 'Login' })
      }
    }

    const goToHome = async () => {
      router.push({ name: 'LandingPage' })
    }

    const goToLogin = async () => {
      router.push({ name: 'Login' })
    }

    return { form, userStore, onSubmit, goToHome, goToLogin }
  }
})
</script>
<style lang='scss' scoped>
@import "./sass/_base.scss";
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
</style>

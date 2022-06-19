<template>
  <Nav />
  <div class="container">
    <form class="form" @submit.prevent="onSubmit">
      <h3 class="form-heading__main">Bem vindo de volta</h3>
      <h4 class="form-heading__description">Por favor insira os seus dados para ganhar acesso.</h4>
      <div class="form-group">
        <input
          class="form-input"
          v-model="form.username"
          type="text"
          required
          placeholder="Entre com seu usuário"
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
          placeholder="Entre com sua senha"
        />
        <button class="form-button__icons" disabled>
          <i class="gg-lock"></i>
        </button>
      </div>
      <div class="response-message">
        <span class="response-message">{{ userStore.state.error }}</span>
      </div>
      <button class="form-button" type="submit">ENTRAR</button>
    </form>
    <div class="user">
      <span class="user-signup">
        Não tem uma conta? <span @click="goToSignUp" title="Cadastrar" class="user-signup__button">Cadastra-se</span>
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
  name: 'Login',
  components: {
    Nav
  },
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
        router.push({ name: 'Home' })
      }
    }

    const goToHome = async () => {
      router.push({ name: 'LandingPage' })
    }

    const goToSignUp = async () => {
      router.push({ name: 'Signup' })
    }

    return { form, userStore, onSubmit, goToHome, goToSignUp }
  }
})
</script>
<style lang='scss'>
@import "./sass/_base.scss";
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
</style>

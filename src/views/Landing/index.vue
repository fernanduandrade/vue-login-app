<template>
  <Nav />
  <div class="container">
    <div class="landing">
      <div class="landing-header">
        <p class="landing-text__darker">use o contador</p>
        <p class="landing-text__lighter">incrementador</p>
        <p class="landing-text__darker">aqui  ;)</p>
        <div class="search">
          <input class="search-input" placeholder="pesquisar" type="text" />
          <button class="search-button" title="pesquisar">
            <i class="gg-search"></i>
          </button>
        </div>
      </div>
      <div class="lading-svg">
        <HeaderImg />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Nav from '@/components/Nav/index.vue'
import HeaderImg from '@/components/Icons/HeaderImg/index.vue'
export default defineComponent({
  name: 'Landing',
  components: {
    Nav,
    HeaderImg
  }
})
</script>
<style lang="scss">
 @import './sass/_base.scss'
</style>

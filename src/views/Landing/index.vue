<template>
  <div class="container">
    <Nav />
    <div class="landing">
      <div class="landing-header">
        <p>get your</p>
        <p>designer's</p>
        <p>from here</p>
        <div class="landing-search">
          <input placeholder="search" type="text" />
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
<style scoped lang="scss">
 @import './sass/_base.scss'
</style>

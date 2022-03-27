<template>
  <div class="container">
    <Nav />
    <!-- <p class="container">Lading Page foda</p> -->
      <!-- <a href="/login">butao</a> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Nav from '@/components/Nav/index.vue'
export default defineComponent({
  name: 'Landing',
  components: {
    Nav
  }
})
</script>
<style scoped lang="scss">
 @import './sass/_base.scss'
</style>

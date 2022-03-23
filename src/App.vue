<template>
  <Nav />
  <div class="container">
    <router-view v-slot="{Component}">
      <component :is="Component" :key="$route.path"></component>
    </router-view>
  <!-- <Login /> -->
  </div>
</template>

<script lang="ts">
import '@/styles/global-style'
import { defineComponent } from 'vue'
import Nav from '@/components/Nav/index.vue'

export default defineComponent({
  components: {
    Nav
  },
  name: 'App'
})
</script>
<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.container{
  display: flex;
}
</style>

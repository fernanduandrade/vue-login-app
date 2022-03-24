<template>
    <router-view></router-view>
</template>

<script lang="ts">
import '@/styles/global-style'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
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

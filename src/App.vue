<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
<style lang="css">
 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
 .fade-enter-active,
 .fade-leave-active {
   transition: opacity 0.3s;
 }
 .fade-enter,
 .fade-leave-to {
   opacity: 0;
 }
 * {
   margin: 0;
   padding: 0; }

 *,
 *::before,
 *::after {
   box-sizing: inherit; }

 html {
   box-sizing: border-box;
   font-size: 62.5%; }
 body {
   font-family: 'Inter', sans-serif;
   font-weight: 400;
   line-height: 1.6;
 }
</style>

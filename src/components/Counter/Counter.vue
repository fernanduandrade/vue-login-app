<template>
    <h3> {{ state.count }} x 2 = {{ getters.timesTwo }}</h3>

    <button @click="increment(1)">
        Incrementar
    </button>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import counterStore from '@/store/counter'

export default defineComponent({
  setup () {
    const { state, getters, increment } = counterStore
    return { state, getters, increment }
  }
})
</script>

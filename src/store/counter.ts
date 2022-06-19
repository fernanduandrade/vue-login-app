import { computed, reactive } from 'vue'

const state = reactive({
  count: 0
})

const getters = reactive({
  timesTwo: computed(() => state.count * 2)
})

const actions = {
  increment (by: number) {
    state.count = state.count + by
  }
}

export default { state, getters, ...actions }
